import { afterEach, it, expect, describe, vitest } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { VList } from "./VList";
import { Profiler, ReactElement, forwardRef, useEffect, useState } from "react";
import { CustomItemComponentProps } from "./types";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

// https://github.com/jsdom/jsdom/issues/1261#issuecomment-362928131
Object.defineProperty(HTMLElement.prototype, "offsetParent", {
  get() {
    return this.parentNode;
  },
});

global.ResizeObserver = class {
  first = false;
  constructor(private callback: ResizeObserverCallback) {}
  disconnect() {}
  observe(e: HTMLElement) {
    const entry: Pick<ResizeObserverEntry, "contentRect" | "target"> = {
      contentRect: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: ITEM_WIDTH,
        height: this.first ? VIEWPORT_HEIGHT : ITEM_HEIGHT,
        x: 0,
        y: 0,
        toJSON() {},
      },
      target: e,
    };
    this.callback([entry] as any, this);
    // HACK: first observing should be root
    this.first = false;
  }
  unobserve(_target: Element) {}
};

afterEach(cleanup);

it("should pass attributes to element", () => {
  const { asFragment } = render(
    <VList
      id="id"
      className="class"
      tabIndex={0}
      role="list"
      aria-label="test"
      style={{ background: "red" }}
    >
      <div>0</div>
    </VList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should pass index to items", () => {
  const Item = forwardRef<HTMLDivElement, CustomItemComponentProps>(
    ({ children, index, style }, ref) => {
      return (
        <div ref={ref} style={style} data-index={index}>
          {children}
        </div>
      );
    }
  );
  const { asFragment } = render(
    <VList item={Item}>
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render with render prop", () => {
  const items = Array.from({ length: 1000 }).map((_, i) => ({
    id: i,
    label: "This is " + i,
  }));
  const { asFragment } = render(
    <VList count={items.length}>
      {(i) => {
        const item = items[i]!;
        return <div key={item.id}>{item.label}</div>;
      }}
    </VList>
  );
  expect(asFragment()).toMatchSnapshot();
});

describe("vertical", () => {
  it("should render 0 children", () => {
    const { asFragment } = render(<VList>{[]}</VList>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1 children", () => {
    const { asFragment } = render(
      <VList>
        <div>0</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(
      <VList>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const { asFragment } = render(
      <VList>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1000 children", () => {
    const { asFragment } = render(
      <VList>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const { asFragment } = render(
      <VList>
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", () => {
    const { asFragment } = render(
      <VList>
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", () => {
    const { asFragment } = render(
      <VList>
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = render(
      <VList>
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const { asFragment } = render(
      <VList style={{ width: 100, height: 800 }}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 1 children", () => {
    const { asFragment } = render(
      <VList horizontal>
        <div>0</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(
      <VList horizontal>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const { asFragment } = render(
      <VList horizontal>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1000 children", () => {
    const { asFragment } = render(
      <VList horizontal>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const { asFragment } = render(
      <VList horizontal>
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", () => {
    const { asFragment } = render(
      <VList horizontal>
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", () => {
    const { asFragment } = render(
      <VList horizontal>
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = render(
      <VList horizontal>
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const { asFragment } = render(
      <VList horizontal style={{ width: 100, height: 800 }}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("reverse", () => {
  it("should render many items", () => {
    const { asFragment } = render(
      <VList reverse>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("render count", () => {
  it("should render on mount", () => {
    const rootFn = vitest.fn();
    const itemCount = 4;
    const itemFns = Array.from({ length: itemCount }, (_) => vitest.fn());

    render(
      <Profiler id="root" onRender={rootFn}>
        <VList>
          {Array.from({ length: itemCount }, (_, i) => {
            const key = `item-${i}`;
            return (
              <Profiler key={key} id={key} onRender={itemFns[i]!}>
                <div>{i}</div>
              </Profiler>
            );
          })}
        </VList>
      </Profiler>
    );

    expect(rootFn).toBeCalledTimes(2);
    itemFns.forEach((itemFn) => {
      expect(itemFn).toHaveBeenCalledTimes(1);
    });
  });

  it("should render on mount many items", () => {
    const rootFn = vitest.fn();
    const itemCount = 100;
    const itemFns = Array.from({ length: itemCount }, (_) => vitest.fn());

    render(
      <Profiler id="root" onRender={rootFn}>
        <VList>
          {Array.from({ length: itemCount }, (_, i) => {
            const key = `item-${i}`;
            return (
              <Profiler key={key} id={key} onRender={itemFns[i]!}>
                <div>{i}</div>
              </Profiler>
            );
          })}
        </VList>
      </Profiler>
    );

    expect(rootFn).toBeCalledTimes(3);
    itemFns.forEach((itemFn) => {
      expect(itemFn.mock.calls.length).toBeLessThanOrEqual(1);
    });
  });

  it("should render on length change", () => {
    let ready = false;
    const wrap = (f: (...args: any[]) => void) => {
      return (...args: any[]) => {
        if (!ready) return;
        f(...args);
      };
    };
    const rootFn = vitest.fn();

    const itemCount = 4;
    const itemFns = Array.from({ length: itemCount }, (_) => vitest.fn());

    const Mounter = ({
      children,
      count: initialCount,
    }: {
      children: (count: number) => ReactElement;
      count: number;
    }): ReactElement => {
      const [count, setCount] = useState(initialCount);
      useEffect(() => {
        ready = true;
        setCount((prev) => {
          return prev - 1;
        });
      }, []);
      return children(count);
    };

    render(
      <Mounter count={itemCount}>
        {(count) => (
          <Profiler id="root" onRender={wrap(rootFn)}>
            <VList>
              {Array.from({ length: count }, (_, i) => {
                const key = `item-${i}`;
                return (
                  <Profiler key={key} id={key} onRender={wrap(itemFns[i]!)}>
                    <div>{i}</div>
                  </Profiler>
                );
              })}
            </VList>
          </Profiler>
        )}
      </Mounter>
    );

    expect(rootFn).toBeCalledTimes(2);
    itemFns.forEach((itemFn, i) => {
      expect(itemFn).toBeCalledTimes(i === itemFns.length - 1 ? 0 : 1);
    });
  });

  it("should render on length change many items", () => {
    let ready = false;
    const wrap = (f: (...args: any[]) => void) => {
      return (...args: any[]) => {
        if (!ready) return;
        f(...args);
      };
    };
    const rootFn = vitest.fn();

    const itemCount = 100;
    const itemFns = Array.from({ length: itemCount }, (_) => vitest.fn());

    const Mounter = ({
      children,
      count: initialCount,
    }: {
      children: (count: number) => ReactElement;
      count: number;
    }): ReactElement => {
      const [count, setCount] = useState(initialCount);
      useEffect(() => {
        ready = true;
        setCount((prev) => {
          return prev - 1;
        });
      }, []);
      return children(count);
    };

    render(
      <Mounter count={itemCount}>
        {(count) => (
          <Profiler id="root" onRender={wrap(rootFn)}>
            <VList>
              {Array.from({ length: count }, (_, i) => {
                const key = `item-${i}`;
                return (
                  <Profiler key={key} id={key} onRender={wrap(itemFns[i]!)}>
                    <div>{i}</div>
                  </Profiler>
                );
              })}
            </VList>
          </Profiler>
        )}
      </Mounter>
    );

    expect(rootFn).toBeCalledTimes(3);
    itemFns.forEach((itemFn) => {
      expect(itemFn.mock.calls.length).toBeLessThanOrEqual(2); // TODO: should be 1
    });
  });
});
