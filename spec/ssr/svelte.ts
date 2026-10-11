import { onTestFinished } from "vitest";
import { type Component, hydrate as hydrateSvelte, unmount } from "svelte";
import { render as renderToString } from "svelte/server";
import List from "./svelte-list.svelte";
import Window from "./svelte-window.svelte";
import Grid from "./svelte-grid.svelte";
import Masonry from "./svelte-masonry.svelte";
import type { SsrEntry, SsrFixtures } from "../browser/index.js";

// TypeScript cannot relate the props to the fixture chosen by the name
const fixtures: Record<keyof SsrFixtures, Component<any>> = {
  list: List,
  window: Window,
  grid: Grid,
  masonry: Masonry,
};

export const render: SsrEntry["render"] = (name, props) =>
  renderToString(fixtures[name], { props }).body;

export const hydrate: SsrEntry["hydrate"] = (root, name, props) => {
  const app = hydrateSvelte(fixtures[name], { target: root, props });
  onTestFinished(() => unmount(app));
};
