import { afterEach, it, expect, describe, vitest } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { WindowVirtualizer } from "./WindowVirtualizer";
import { Profiler, ReactElement, forwardRef, useEffect, useState } from "react";
import { CustomItemComponentProps } from "./types";
import { setupJsDomEnv } from "../../scripts/spec";

setupJsDomEnv({
  itemWidth: 100,
  itemHeight: 50,
});

afterEach(cleanup);

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
    <WindowVirtualizer item={Item}>
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </WindowVirtualizer>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render with render prop", () => {
  const items = Array.from({ length: 1000 }).map((_, i) => ({
    id: i,
    label: "This is " + i,
  }));
  const { asFragment } = render(
    <WindowVirtualizer count={items.length}>
      {(i) => {
        const item = items[i]!;
        return <div key={item.id}>{item.label}</div>;
      }}
    </WindowVirtualizer>
  );
  expect(asFragment()).toMatchSnapshot();
});

describe("vertical", () => {
  it("should render 1 children", () => {
    const { asFragment } = render(
      <WindowVirtualizer>
        <div>0</div>
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(
      <WindowVirtualizer>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const { asFragment } = render(
      <WindowVirtualizer>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1000 children", () => {
    const { asFragment } = render(
      <WindowVirtualizer>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const { asFragment } = render(
      <WindowVirtualizer>
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", () => {
    const { asFragment } = render(
      <WindowVirtualizer>
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", () => {
    const { asFragment } = render(
      <WindowVirtualizer>
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = render(
      <WindowVirtualizer>
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const { asFragment } = render(
      <div style={{ width: 100, height: 800 }}>
        <WindowVirtualizer>
          <div>0</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </WindowVirtualizer>
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 1 children", () => {
    const { asFragment } = render(
      <WindowVirtualizer horizontal>
        <div>0</div>
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(
      <WindowVirtualizer horizontal>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const { asFragment } = render(
      <WindowVirtualizer horizontal>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1000 children", () => {
    const { asFragment } = render(
      <WindowVirtualizer horizontal>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const { asFragment } = render(
      <WindowVirtualizer horizontal>
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", () => {
    const { asFragment } = render(
      <WindowVirtualizer horizontal>
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", () => {
    const { asFragment } = render(
      <WindowVirtualizer horizontal>
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = render(
      <WindowVirtualizer horizontal>
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const { asFragment } = render(
      <div style={{ width: 100, height: 800 }}>
        <WindowVirtualizer horizontal>
          <div>0</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </WindowVirtualizer>
      </div>
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
        <WindowVirtualizer>
          {Array.from({ length: itemCount }, (_, i) => {
            const key = `item-${i}`;
            return (
              <Profiler key={key} id={key} onRender={itemFns[i]!}>
                <div>{i}</div>
              </Profiler>
            );
          })}
        </WindowVirtualizer>
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
        <WindowVirtualizer>
          {Array.from({ length: itemCount }, (_, i) => {
            const key = `item-${i}`;
            return (
              <Profiler key={key} id={key} onRender={itemFns[i]!}>
                <div>{i}</div>
              </Profiler>
            );
          })}
        </WindowVirtualizer>
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
            <WindowVirtualizer>
              {Array.from({ length: count }, (_, i) => {
                const key = `item-${i}`;
                return (
                  <Profiler key={key} id={key} onRender={wrap(itemFns[i]!)}>
                    <div>{i}</div>
                  </Profiler>
                );
              })}
            </WindowVirtualizer>
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
            <WindowVirtualizer>
              {Array.from({ length: count }, (_, i) => {
                const key = `item-${i}`;
                return (
                  <Profiler key={key} id={key} onRender={wrap(itemFns[i]!)}>
                    <div>{i}</div>
                  </Profiler>
                );
              })}
            </WindowVirtualizer>
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
