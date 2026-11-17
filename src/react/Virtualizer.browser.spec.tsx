import { expect, it, vi, onTestFinished } from "vitest";
import { createRef, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { createDomRoot } from "../../spec/browser/index.js";
import { delay, range } from "../../spec/utils.js";
import { Virtualizer } from "./Virtualizer.js";

it.each([false, true])(
  "should finish a single native scroll once with scrollRef (Strict Mode: %s)",
  async (strict) => {
    const scrollRef = createRef<HTMLDivElement>();
    const onScrollEnd = vi.fn();
    const list = (
      <div ref={scrollRef} style={{ height: 200, overflowY: "auto" }}>
        <Virtualizer
          scrollRef={scrollRef}
          data={range(100)}
          itemSize={20}
          onScrollEnd={onScrollEnd}
        >
          {(i) => <div style={{ height: 20 }}>{i}</div>}
        </Virtualizer>
      </div>
    );
    const root = createRoot(createDomRoot(document));
    onTestFinished(() => root.unmount());
    flushSync(() =>
      root.render(strict ? <StrictMode>{list}</StrictMode> : list),
    );
    await expect.poll(() => scrollRef.current?.scrollHeight).toBe(2000);
    scrollRef.current!.scrollTop = 100;
    await expect.poll(() => onScrollEnd.mock.calls.length).toBe(1);
    await delay(150);
    expect(onScrollEnd).toHaveBeenCalledTimes(1);
  },
);
