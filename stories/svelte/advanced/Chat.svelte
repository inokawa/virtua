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

  // Auto-add items timer (when not streaming)
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

  const handleScroll = (offset: number) => {
    if (!ref) return;

    shouldStickToBottom =
      offset - ref.getScrollSize() + ref.getViewportSize() >= -1.5;

    if (offset < 100) {
      isPrepend = true;
      items = [...Array.from({ length: 100 }, () => createItem()), ...items];
    }
  };

  const disabled = $derived(!value.length);

  const submit = () => {
    if (disabled) return;
    shouldStickToBottom = true;
    items = [...items, createItem({ value, me: true })];
    value = "";
  };

  const jumpToTop = () => {
    ref?.scrollTo(0);
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
    <Virtualizer
      bind:this={ref}
      data={items}
      shift={isPrepend}
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
    style="display: flex; justify-content: flex-end; margin: 10px;"
    onsubmit={(e) => {
      e.preventDefault();
      e.stopPropagation();
      submit();
    }}
  >
    <div
      style="position: absolute; left: 10px; bottom:10px; display: flex; gap: 4px;"
    >
      <button type="button" onclick={jumpToTop}> jump to top </button>
    </div>
    <div
      style="display: flex; flex-direction: column; justify-content: flex-end;"
    >
      <textarea
        style="width: 400px;"
        rows="6"
        bind:value
        onkeydown={handleKeyDown}
      ></textarea>
      <div
        style="display: flex; flex-direction: row; gap: 8px; justify-content: flex-end;"
      >
        <button type="submit" {disabled}> submit </button>
      </div>
    </div>
  </form>
</div>
