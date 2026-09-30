<script lang="ts">
  import { faker } from "@faker-js/faker";
  import { VList, type VListHandle } from "../../../src/svelte";

  type Row =
    { type: "header"; letter: string } | { type: "contact"; name: string };

  const data: Row[] = [];
  faker.helpers
    .multiple(() => `${faker.person.firstName()} ${faker.person.lastName()}`, {
      count: 1000,
    })
    .sort((a, b) => a.localeCompare(b))
    .forEach((name) => {
      const letter = name[0]!.toUpperCase();
      const prev = data.findLast((r) => r.type === "header");
      if (!prev || prev.letter !== letter) {
        data.push({ type: "header", letter });
      }
      data.push({ type: "contact", name });
    });

  const stickyItemHeight = 32;
  const stickyIndexes = data.flatMap((r, i) =>
    r.type === "header" ? [i] : [],
  );

  let ref: VListHandle;
  let activeIndex = $state(0);

  const itemProps = ({ index }: { index: number }) => {
    if (data[index]!.type !== "header") return undefined;
    return {
      style: {
        "z-index": "1",
        ...(activeIndex === index ? { position: "sticky", top: "0" } : {}),
      },
    };
  };

  const handleScroll = (offset: number) => {
    if (!ref) return;
    const start = ref.findItemIndex(offset);
    activeIndex = [...stickyIndexes].reverse().find((i) => start >= i)!;
  };
</script>

<VList
  bind:this={ref}
  {data}
  style="height: 100vh; font-family: system-ui, sans-serif; font-size: 14px;"
  {itemProps}
  keepMounted={[activeIndex]}
  onscroll={handleScroll}
>
  {#snippet children(item)}
    {#if item.type === "header"}
      <div
        style="
          height: {stickyItemHeight}px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          background: #f3f4f6;
          border-bottom: solid 1px #e5e7eb;
          color: #6b7280;
          font-size: 13px;
          font-weight: 600;
        "
      >
        {item.letter}
      </div>
    {:else}
      <div
        style="
          height: 48px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          border-bottom: solid 1px #f0f0f0;
          background: #fff;
        "
      >
        {item.name}
      </div>
    {/if}
  {/snippet}
</VList>
