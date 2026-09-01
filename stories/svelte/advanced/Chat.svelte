<script lang="ts">
  import { Virtualizer, type VirtualizerHandle } from "../../../src/svelte";
  import { faker } from "@faker-js/faker";
  import { onMount } from "svelte";

  type Data = {
    id: number;
    value: string;
    me?: boolean;
  };

  let id = 0;
  const createItem = ({
    value = faker.lorem.paragraphs(1),
    me,
  }: {
    value?: string;
    me?: boolean;
  } = {}): Data => ({
    id: id++,
    value: value,
    me,
  });

  let items = $state(Array.from({ length: 100 }, () => createItem()));
  let value = $state("Hello world!");
  let ref: VirtualizerHandle;
  let shouldStickToBottom = $state(true);
  let isPrepend = $state(false);
  let fetching = $state(false);

  const spinnerHeight = 48;

  // Reset isPrepend after each update
  $effect(() => {
    items;
    isPrepend = false;
  });

  // Auto-scroll to bottom when items change
  $effect(() => {
    if (!ref) return;
    const lastItemIndex = items.length - 1;
    if (shouldStickToBottom) {
      ref.scrollToIndex(lastItemIndex, { align: "end" });
    }
  });

  // Auto-add items timer
  onMount(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    const setTimer = () => {
      timer = setTimeout(() => {
        items = [...items, createItem()];
        setTimer();
      }, 5000);
    };

    setTimer();

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  });

  const handleScroll = async (offset: number) => {
    if (!ref) return;

    shouldStickToBottom =
      offset - spinnerHeight - ref.getScrollSize() + ref.getViewportSize() >=
      -1.5;

    if (offset < spinnerHeight + 100 && !fetching) {
      fetching = true;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      isPrepend = true;
      items = [...Array.from({ length: 100 }, () => createItem()), ...items];
      fetching = false;
    }
  };

  const disabled = $derived(!value.length);

  const submit = () => {
    if (disabled) return;
    shouldStickToBottom = true;
    items = [...items, createItem({ value, me: true })];
    value = "";
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter" && (e.ctrlKey || e.metaKey)) {
      submit();
      e.preventDefault();
    }
  };
</script>

<div
  style="width: 100vw; height: 100vh; display: flex; flex-direction: column;"
>
  <div
    style="
    overflow-y: auto;
    flex: 1;
    /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
    overflow-anchor: none;
    /* flex style for spacer */
    display: flex;
    flex-direction: column;
  "
  >
    <div
      style="
      /* spacer to align virtualizer to the bottom when all items are visible in the viewport */
      flex-grow: 1
    "
    ></div>
    <div class="spinner" style:visibility={fetching ? "visible" : "hidden"}>
      <span class="loader"></span>
    </div>
    <Virtualizer
      bind:this={ref}
      data={items}
      shift={isPrepend}
      startMargin={spinnerHeight}
      getKey={(d) => d.id}
      onscroll={handleScroll}
    >
      {#snippet children(item)}
        {#if item.me === true}
          <div
            style="border: solid 1px #ccc; background: lightyellow; padding: 10px; border-radius: 8px; white-space: pre-wrap; margin: 10px; margin-left: 160px;"
          >
            {item.value}
          </div>
        {:else}
          <div
            style="border: solid 1px #ccc; background: #fff; padding: 10px; border-radius: 8px; white-space: pre-wrap; margin: 10px; margin-right: 160px;"
          >
            {item.value}
          </div>
        {/if}
      {/snippet}
    </Virtualizer>
  </div>
  <form
    style="display: flex; flex-direction: column; margin: 10px;"
    onsubmit={(e) => {
      e.preventDefault();
      e.stopPropagation();
      submit();
    }}
  >
    <textarea style="flex: 1;" rows="6" bind:value onkeydown={handleKeyDown}
    ></textarea>
    <div
      style="display: flex; flex-direction: row; gap: 8px; justify-content: flex-end;"
    >
      <button type="submit" {disabled}> submit </button>
    </div>
  </form>
</div>

<style>
  .spinner {
    flex: none;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3px solid #ccc;
    border-top-color: transparent;
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
