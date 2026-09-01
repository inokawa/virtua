import { expect, it, onTestFinished } from "vitest";
import {
  createRef,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createRoot } from "react-dom/client";
import { Virtualizer, type VirtualizerHandle } from "../../src/react/index.js";

const render = (node: ReactNode) => {
  const container = document.body.appendChild(document.createElement("div"));
  onTestFinished(() => {
    container.remove();
  });
  const root = createRoot(container);
  root.render(node);
  onTestFinished(() => root.unmount());
  return container;
};

it("prepending cancels imperative scroll", async () => {
  let id = 0;
  const createItems = (count: number) =>
    Array.from({ length: count }, () => id++);

  const ref = createRef<VirtualizerHandle>();
  let prependCount = 0;
  let scrollEnded = false;

  const Component = () => {
    const [items, setItems] = useState(() => createItems(100));
    const isPrepend = useRef(false);

    useLayoutEffect(() => {
      isPrepend.current = false;
    });

    return (
      <div style={{ height: 400, overflowY: "auto" }}>
        <Virtualizer
          ref={ref}
          shift={isPrepend.current}
          onScroll={(offset) => {
            if (offset < 100) {
              prependCount++;
              isPrepend.current = true;
              setItems((prev) => [...createItems(100), ...prev]);
            }
          }}
          onScrollEnd={() => {
            scrollEnded = true;
          }}
        >
          {items.map((i) => (
            <div key={i} style={{ height: 40 }}>
              item-{i}
            </div>
          ))}
        </Virtualizer>
      </div>
    );
  };

  const container = render(<Component />);
  await expect.poll(() => container.textContent).toContain("item-0");

  // scroll to end
  const scroller = container.firstElementChild!;
  scroller.scrollTop = scroller.scrollHeight;
  await expect.poll(() => scrollEnded).toBe(true);
  scrollEnded = false;

  // scroll to top
  ref.current!.scrollTo(0);

  // check if imperative scrolling doesn't cause infinite loop
  await expect.poll(() => scrollEnded).toBe(true);
  expect(prependCount).toBe(1);
});
