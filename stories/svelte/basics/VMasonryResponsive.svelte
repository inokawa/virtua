<script lang="ts">
  import { VMasonry } from "../../../src/svelte";

  const colors = [
    "#145ec1",
    "#b52f48",
    "#067d51",
    "#733ea4",
    "#a96506",
    "#057176",
    "#413c9b",
  ];
  const aspectRatios = ["1 / 1", "3 / 4", "4 / 3", "2 / 3", "3 / 2"];
  const data = Array.from({ length: 1000 }).map((_, i) => i);

  // Recipe: lanes for each breakpoint of the window, like the classes of Tailwind CSS. The media queries are read synchronously, so the lanes are right from the first render on the client.
  const BREAKPOINTS = [
    ["(min-width: 1536px)", 6],
    ["(min-width: 1280px)", 5],
    ["(min-width: 1024px)", 4],
    ["(min-width: 768px)", 3],
  ] as const;
  const getLanesByMediaQuery = (): number =>
    BREAKPOINTS.find(([query]) => window.matchMedia(query).matches)?.[1] ?? 2;

  let lanes = $state(getLanesByMediaQuery());

  $effect(() => {
    const onChange = () => {
      lanes = getLanesByMediaQuery();
    };
    const lists = BREAKPOINTS.map(([query]) => window.matchMedia(query));
    lists.forEach((list) => list.addEventListener("change", onChange));
    return () => {
      lists.forEach((list) => list.removeEventListener("change", onChange));
    };
  });
</script>

<VMasonry style="height: 100vh;" {lanes} gap={8} {data}>
  {#snippet children(i)}
    <div
      style="aspect-ratio: {aspectRatios[
        (i * 2654435761) % 5
      ]}; border: solid 1px #ccc; padding: 4px; background: {colors[
        i % colors.length
      ]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);"
    >
      {i}
    </div>
  {/snippet}
</VMasonry>
