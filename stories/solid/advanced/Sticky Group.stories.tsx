/**
 * @jsxImportSource solid-js
 */
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  CustomItemComponentProps,
  VList,
  VListHandle,
} from "../../../src/solid";
import {
  createSignal,
  ParentComponent,
  createContext,
  useContext,
  Signal,
} from "solid-js";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

type Row =
  { type: "header"; letter: string } | { type: "contact"; name: string };

const rows: Row[] = [];
faker.helpers
  .multiple(() => `${faker.person.firstName()} ${faker.person.lastName()}`, {
    count: 1000,
  })
  .sort((a, b) => a.localeCompare(b))
  .forEach((name) => {
    const letter = name[0]!.toUpperCase();
    const prev = rows.findLast((r) => r.type === "header");
    if (!prev || prev.letter !== letter) {
      rows.push({ type: "header", letter });
    }
    rows.push({ type: "contact", name });
  });

const stickyItemHeight = 32;
const stickyIndexes = new Set(
  rows.flatMap((r, i) => (r.type === "header" ? [i] : [])),
);
const StickyIndexContext = createContext<Signal<number>>();
const StickyItem: ParentComponent<CustomItemComponentProps> = (props) => {
  const [activeIndex] = useContext(StickyIndexContext);
  return (
    <div
      ref={props.ref}
      style={{
        ...props.style,
        ...(stickyIndexes.has(props.index) && {
          "z-index": 1,
        }),
        ...(activeIndex() === props.index && {
          position: "sticky",
          top: 0,
        }),
      }}
    >
      {props.children}
    </div>
  );
};

export const Default: StoryObj = {
  name: "Sticky Group",
  render: () => {
    let ref: VListHandle | undefined;
    const [activeIndex, setActiveIndex] = createSignal(0);
    return (
      <StickyIndexContext.Provider value={[activeIndex, setActiveIndex]}>
        <VList
          ref={ref}
          style={{
            height: "100vh",
            "font-family": "system-ui, sans-serif",
            "font-size": "14px",
          }}
          data={rows}
          item={StickyItem}
          keepMounted={[activeIndex()]}
          onScroll={() => {
            if (!ref) return;
            const start = ref.findItemIndex(ref.scrollOffset);
            const activeStickyIndex = [...stickyIndexes]
              .reverse()
              .find((index) => start >= index)!;
            setActiveIndex(activeStickyIndex);
          }}
        >
          {(row) =>
            row.type === "header" ? (
              <div
                style={{
                  height: stickyItemHeight + "px",
                  display: "flex",
                  "align-items": "center",
                  padding: "0 16px",
                  background: "#f3f4f6",
                  "border-bottom": "solid 1px #e5e7eb",
                  color: "#6b7280",
                  "font-size": "13px",
                  "font-weight": 600,
                }}
              >
                {row.letter}
              </div>
            ) : (
              <div
                style={{
                  height: "48px",
                  display: "flex",
                  "align-items": "center",
                  padding: "0 16px",
                  "border-bottom": "solid 1px #f0f0f0",
                  background: "#fff",
                }}
              >
                {row.name}
              </div>
            )
          }
        </VList>
      </StickyIndexContext.Provider>
    );
  },
};
