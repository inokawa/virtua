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

export default {
  component: VList,
} as Meta;

const stickyItemHeight = 40;
const stickyIndexes = new Set([0, 100, 200, 300, 400, 500, 600, 700, 800, 900]);
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
    const [items] = createSignal(
      Array.from({ length: 1000 }).map((_, id) => ({ id }))
    );
    return (
      <StickyIndexContext.Provider value={[activeIndex, setActiveIndex]}>
        <VList
          ref={(handle) => (ref = handle)}
          data={items()}
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
          {(data, index) => {
            const isSticky = () => stickyIndexes.has(index());
            return (
              <div
                style={{
                  height: (isSticky() ? stickyItemHeight : 80) + "px",
                  "border-bottom": "solid 1px #ccc",
                  background: isSticky() ? "#B8C1C8" : "#fff",
                  color: isSticky() ? "#fff" : undefined,
                  "padding-right": "4px",
                  "padding-left": "4px",
                }}
              >
                {data.id}
              </div>
            );
          }}
        </VList>
      </StickyIndexContext.Provider>
    );
  },
};
