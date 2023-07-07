import { afterEach, it, expect, describe, jest } from "@jest/globals";
import { render, cleanup, waitFor } from "@testing-library/react";
import { VList, VListHandle } from "./VList";
import {
  Profiler,
  ReactElement,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { CustomWindowComponentProps } from "..";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

global.ResizeObserver = class {
  observers = new Set<Element>();
  callback: ResizeObserverCallback;
  first = false;
  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }
  disconnect() {
    this.observers.clear();
  }
  observe(e: HTMLElement) {
    this.observers.add(e);

    if (this.first) {
      // HACK: first observing should be root
      const entry: Pick<ResizeObserverEntry, "contentRect" | "target"> = {
        contentRect: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: ITEM_WIDTH,
          height: VIEWPORT_HEIGHT,
          x: 0,
          y: 0,
          toJSON() {},
        },
        target: e,
      };
      this.callback([entry] as any, this);
      this.first = false;
      return;
    }

    const entry: Pick<ResizeObserverEntry, "contentRect" | "target"> = {
      contentRect: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        x: 0,
        y: 0,
        toJSON() {},
      },
      target: e,
    };
    this.callback([entry] as any, this);
  }
  unobserve(_target: Element) {}
};
global.IntersectionObserver = class {
  observers = new Set<Element>();
  callback: IntersectionObserverCallback;
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
  disconnect() {
    this.observers.clear();
  }
  observe(e: HTMLElement) {
    this.observers.add(e);
  }
  unobserve() {}
  takeRecords() {
    return [];
  }
  root = null;
  rootMargin = "";
  thresholds = [];
};

afterEach(cleanup);

it("should pass attributes to element", async () => {
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

it("should change components", async () => {
  const UlList = forwardRef<HTMLDivElement, CustomWindowComponentProps>(
    ({ children, attrs, height }, ref) => {
      return (
        <div ref={ref} {...attrs}>
          <ul style={{ position: "relative", height, margin: 0 }}>
            {children}
          </ul>
        </div>
      );
    }
  );
  const { asFragment } = render(
    <VList element={UlList} itemElement="li">
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VList>
  );
  expect(asFragment()).toMatchSnapshot();
});

describe("render count", () => {
  it("should render on mount", () => {
    const rootFn = jest.fn();
    const itemCount = 4;
    const itemFns = Array.from({ length: itemCount }, (_) => jest.fn());

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
    const rootFn = jest.fn();
    const itemCount = 100;
    const itemFns = Array.from({ length: itemCount }, (_) => jest.fn());

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
    const rootFn = jest.fn();

    const itemCount = 4;
    const itemFns = Array.from({ length: itemCount }, (_) => jest.fn());

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
    const rootFn = jest.fn();

    const itemCount = 100;
    const itemFns = Array.from({ length: itemCount }, (_) => jest.fn());

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

describe("vertical", () => {
  it("should render 1 children", async () => {
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
  it("should render 1 children", async () => {
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
  // it("should render one item", () => {
  //   const { asFragment } = render(
  //     <VList mode="reverse">
  //       <div>0</div>
  //     </VList>
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });
  it("should render many items", () => {
    const { asFragment } = render(
      <VList mode="reverse">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("rtl", () => {
  // it("should not work vertical", () => {
  //   const { asFragment } = render(
  //     <VList mode="rtl">
  //       {Array.from({ length: 100 }).map((_, i) => (
  //         <div key={i}>{i}</div>
  //       ))}
  //     </VList>
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });
  it("should work in horizontal", () => {
    const { asFragment } = render(
      <VList mode="rtl" horizontal>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("onScroll", () => {
  const LIST_ID = "test-id";

  it("should call callbacks on scroll in vertical", async () => {
    const onScroll = jest.fn();
    const onScrollStop = jest.fn();
    const dests = [123, 200, 357];
    const Mounter = () => {
      useEffect(() => {
        const el = document.getElementById(LIST_ID)!;
        dests.forEach((dest) => {
          el.scrollTop = dest;
          el.dispatchEvent(new Event("scroll"));
        });
      }, []);
      return (
        <VList id={LIST_ID} onScroll={onScroll} onScrollStop={onScrollStop}>
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </VList>
      );
    };
    render(<Mounter />);
    await waitFor(() => {
      expect(onScrollStop).toHaveBeenCalled();
    });
    expect(onScroll).toHaveBeenCalledTimes(dests.length);
    dests.forEach((d, i) => {
      expect(onScroll).toHaveBeenNthCalledWith(i + 1, d);
    });
    expect(onScrollStop).toHaveBeenCalledTimes(1);
  });

  it("should call callbacks on scroll in horizontal", async () => {
    const onScroll = jest.fn();
    const onScrollStop = jest.fn();
    const dests = [123, 200, 357];
    const Mounter = () => {
      useEffect(() => {
        const el = document.getElementById(LIST_ID)!;
        dests.forEach((dest) => {
          el.scrollLeft = dest;
          el.dispatchEvent(new Event("scroll"));
        });
      }, []);
      return (
        <VList
          id={LIST_ID}
          horizontal
          onScroll={onScroll}
          onScrollStop={onScrollStop}
        >
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </VList>
      );
    };
    render(<Mounter />);
    await waitFor(() => {
      expect(onScrollStop).toHaveBeenCalled();
    });
    expect(onScroll).toHaveBeenCalledTimes(dests.length);
    dests.forEach((d, i) => {
      expect(onScroll).toHaveBeenNthCalledWith(i + 1, d);
    });
    expect(onScrollStop).toHaveBeenCalledTimes(1);
  });

  it("should call callbacks on imperative scroll in vertical", async () => {
    const onScroll = jest.fn();
    const onScrollStop = jest.fn();
    const dests = [123, 200, 357];
    const Mounter = () => {
      const ref = useRef<VListHandle>(null);
      useEffect(() => {
        const el = document.getElementById(LIST_ID)!;
        dests.forEach((dest) => {
          setTimeout(() => {
            ref.current?.scrollTo(dest);
            el.scrollTop = dest;
            el.dispatchEvent(new Event("scroll"));
          });
        });
      }, []);
      return (
        <VList
          ref={ref}
          id={LIST_ID}
          onScroll={onScroll}
          onScrollStop={onScrollStop}
        >
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </VList>
      );
    };
    render(<Mounter />);
    await waitFor(() => {
      expect(onScrollStop).toHaveBeenCalled();
    });
    expect(onScroll).toHaveBeenCalledTimes(dests.length);
    dests.forEach((d, i) => {
      expect(onScroll).toHaveBeenNthCalledWith(i + 1, d);
    });
    expect(onScrollStop).toHaveBeenCalledTimes(1);
  });

  it("should call callbacks on imperative scroll in horizontal", async () => {
    const onScroll = jest.fn();
    const onScrollStop = jest.fn();
    const dests = [123, 200, 357];
    const Mounter = () => {
      const ref = useRef<VListHandle>(null);
      useEffect(() => {
        const el = document.getElementById(LIST_ID)!;
        dests.forEach((dest) => {
          setTimeout(() => {
            ref.current?.scrollTo(dest);
            el.scrollLeft = dest;
            el.dispatchEvent(new Event("scroll"));
          });
        });
      }, []);
      return (
        <VList
          ref={ref}
          id={LIST_ID}
          horizontal
          onScroll={onScroll}
          onScrollStop={onScrollStop}
        >
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </VList>
      );
    };
    render(<Mounter />);
    await waitFor(() => {
      expect(onScrollStop).toHaveBeenCalled();
    });
    expect(onScroll).toHaveBeenCalledTimes(dests.length);
    dests.forEach((d, i) => {
      expect(onScroll).toHaveBeenNthCalledWith(i + 1, d);
    });
    expect(onScrollStop).toHaveBeenCalledTimes(1);
  });
});
