import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, { CSSProperties, useRef, useState } from "react";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

type Comment = {
  id: number;
  author: string;
  hoursAgo: number;
  body: string;
  replies: Comment[];
};

let nextId = 0;
const createComment = (depth: number): Comment => ({
  id: nextId++,
  author: faker.internet.username(),
  hoursAgo: faker.number.int({ min: 1, max: 48 }),
  body: faker.lorem.paragraphs(faker.number.int({ min: 1, max: 4 })),
  replies:
    depth < 3
      ? Array.from({
          length: faker.number.int({ min: 0, max: 3 - depth }),
        }).map(() => createComment(depth + 1))
      : [],
});
const threads = Array.from({ length: 200 }).map(() => createComment(0));

const countReplies = (comment: Comment): number =>
  comment.replies.reduce((acc, reply) => acc + 1 + countReplies(reply), 0);

const Avatar = ({ name }: { name: string }) => {
  const hue = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
  return (
    <span
      aria-hidden
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: `hsl(${hue} 25% 92%)`,
        color: `hsl(${hue} 20% 35%)`,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {name[0]!.toUpperCase()}
    </span>
  );
};

// clicking the line of a thread collapses it, and the lines of the replies are only a guide
const ThreadLine = ({ onClick }: { onClick?: () => void }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      aria-hidden
      onClick={onClick}
      onMouseEnter={onClick && (() => setHovered(true))}
      onMouseLeave={onClick && (() => setHovered(false))}
      style={{
        flex: "none",
        width: 24,
        display: "flex",
        justifyContent: "center",
        cursor: onClick ? "pointer" : undefined,
      }}
    >
      <div
        style={{
          width: 2,
          borderRadius: 1,
          background: hovered ? "#9ca3af" : "#e5e7eb",
        }}
      />
    </div>
  );
};

const Header = ({
  comment,
  hiddenReplies,
}: {
  comment: Comment;
  hiddenReplies?: number;
}) => (
  <>
    <Avatar name={comment.author} />
    <span>
      <span style={{ fontWeight: 600, color: "#111827" }}>
        {comment.author}
      </span>
      {" · "}
      {comment.hoursAgo}h
      {!!hiddenReplies &&
        ` · ${hiddenReplies} ${hiddenReplies === 1 ? "reply" : "replies"}`}
    </span>
  </>
);

const headerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontSize: 13,
  color: "#6b7280",
};

// the line runs along the body and the replies of a comment
const Content = ({
  comment,
  onLineClick,
}: {
  comment: Comment;
  onLineClick?: () => void;
}) => (
  <div style={{ display: "flex", marginTop: 8 }}>
    <ThreadLine onClick={onLineClick} />
    <div
      style={{
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        paddingLeft: 8,
      }}
    >
      <div
        style={{ whiteSpace: "pre-wrap", lineHeight: 1.6, color: "#374151" }}
      >
        {comment.body}
      </div>
      {comment.replies.map((reply) => (
        <div key={reply.id}>
          <div style={headerStyle}>
            <Header comment={reply} />
          </div>
          <Content comment={reply} />
        </div>
      ))}
    </div>
  </div>
);

const Thread = ({
  comment,
  isCollapsed,
  onToggle,
}: {
  comment: Comment;
  isCollapsed: boolean;
  onToggle: () => void;
}) => (
  <div>
    <button
      aria-expanded={!isCollapsed}
      onClick={onToggle}
      style={{
        font: "inherit",
        ...headerStyle,
        width: "100%",
        padding: 0,
        border: "none",
        background: "none",
        textAlign: "start",
        cursor: "pointer",
      }}
    >
      <Header
        comment={comment}
        hiddenReplies={isCollapsed ? countReplies(comment) : undefined}
      />
    </button>
    {/* animates the height between 0 and auto */}
    <div
      style={{
        display: "grid",
        gridTemplateRows: isCollapsed ? "0fr" : "1fr",
        transition: "grid-template-rows 250ms ease",
      }}
    >
      <div style={{ overflow: "hidden", minHeight: 0 }}>
        <Content comment={comment} onLineClick={onToggle} />
      </div>
    </div>
  </div>
);

export const Default: StoryObj = {
  name: "Comment Thread",
  render: () => {
    const ref = useRef<VListHandle>(null);
    // kept out of the items, which are unmounted when they go offscreen
    const [collapsed, setCollapsed] = useState<ReadonlySet<number>>(
      () => new Set(),
    );

    return (
      <VList
        ref={ref}
        style={{
          height: "100vh",
          background: "#fff",
          fontFamily: "system-ui, sans-serif",
          fontSize: 14,
        }}
      >
        {threads.map((thread, i) => (
          <div key={thread.id} style={{ padding: "0 16px" }}>
            <div
              style={{
                margin: "0 auto",
                maxWidth: 720,
                padding: "20px 0",
                borderBottom: "solid 1px #e5e7eb",
              }}
            >
              <Thread
                comment={thread}
                isCollapsed={collapsed.has(thread.id)}
                onToggle={() => {
                  const willCollapse = !collapsed.has(thread.id);
                  setCollapsed((prev) => {
                    const next = new Set(prev);
                    if (!next.delete(thread.id)) {
                      next.add(thread.id);
                    }
                    return next;
                  });
                  const handle = ref.current!;
                  // brings the thread back if collapsing it from below has left its start above the viewport
                  if (
                    willCollapse &&
                    handle.getItemOffset(i) < handle.scrollOffset
                  ) {
                    handle.scrollToIndex(i, { smooth: true });
                  }
                }}
              />
            </div>
          </div>
        ))}
      </VList>
    );
  },
};
