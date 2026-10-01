import type { Meta, StoryObj } from "@storybook/react-vite";
import { CacheSnapshot, VList, VListHandle } from "../../../src";
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

type Post = {
  id: number;
  name: string;
  text: string;
};

const COLUMN_WIDTH = 340;
const COLUMNS = faker.helpers
  .uniqueArray(faker.word.noun, 50)
  .map((word) => "#" + word);

// the posts of a column are made when it is shown first, and kept to show the same ones again
const postsCache = new Map<number, Post[]>();
let nextPostId = 0;
const getPosts = (column: number): Post[] => {
  let posts = postsCache.get(column);
  if (!posts) {
    posts = Array.from({ length: 1000 }).map(() => ({
      id: nextPostId++,
      name: faker.person.fullName(),
      text: faker.lorem.sentences(faker.number.int({ min: 1, max: 5 })),
    }));
    postsCache.set(column, posts);
  }
  return posts;
};

const PostView = ({ post }: { post: Post }) => (
  <article style={{ padding: "12px 16px", borderBottom: "solid 1px #eee" }}>
    <div style={{ fontWeight: 600 }}>{post.name}</div>
    <div style={{ marginTop: 4, lineHeight: 1.5 }}>{post.text}</div>
  </article>
);

type ColumnState = [offset: number, cache: CacheSnapshot];

const Column = ({
  index,
  states,
}: {
  index: number;
  states: Map<number, ColumnState>;
}) => {
  const ref = useRef<VListHandle>(null);
  // the column is unmounted when it goes offscreen horizontally, so its scroll position is kept outside
  const [offset, cache] = useMemo(() => states.get(index) ?? [], []);

  useLayoutEffect(() => {
    const handle = ref.current!;
    if (offset) {
      handle.scrollTo(offset);
    }
    return () => {
      states.set(index, [handle.scrollOffset, handle.cache]);
    };
  }, []);

  return (
    <section
      aria-label={COLUMNS[index]}
      style={{
        width: COLUMN_WIDTH,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRight: "solid 1px #e5e7eb",
      }}
    >
      <h2
        style={{
          margin: 0,
          padding: "12px 16px",
          fontSize: 15,
          borderBottom: "solid 1px #e5e7eb",
        }}
      >
        {COLUMNS[index]}
      </h2>
      <VList ref={ref} cache={cache} style={{ flex: 1, minHeight: 0 }}>
        {getPosts(index).map((post) => (
          <PostView key={post.id} post={post} />
        ))}
      </VList>
    </section>
  );
};

export const Default: StoryObj = {
  name: "Deck",
  render: () => {
    const states = useMemo(() => new Map<number, ColumnState>(), []);
    return (
      <VList
        horizontal
        style={{
          height: "100vh",
          // only scrolls horizontally, even if the horizontal scrollbar makes the columns overflow vertically
          overflowY: "hidden",
          background: "#fff",
          fontFamily: "system-ui, sans-serif",
          fontSize: 14,
        }}
      >
        {COLUMNS.map((title, i) => (
          <Column key={title} index={i} states={states} />
        ))}
      </VList>
    );
  },
};
