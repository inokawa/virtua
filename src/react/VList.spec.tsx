import { afterEach, it, expect, describe, vitest, vi } from "vitest";
import { render as _render, cleanup } from "@testing-library/react";
import { VList } from "./VList.js";
import { Profiler, forwardRef } from "react";
import { CustomItemComponentProps } from "./types.js";
import { setupResizeJsDom } from "../../scripts/spec.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const render = (...args: Parameters<typeof _render>) => {
  const res = _render(...args);
  vi.runAllTicks();
  return res;
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
    ({ index, ...rest }, ref) => {
      return <div ref={ref} data-index={index} {...rest} />;
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
    <VList data={items}>
      {(item) => {
        return <div key={item.id}>{item.label}</div>;
      }}
    </VList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render with keepMounted", () => {
  const { asFragment } = render(
    <VList keepMounted={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}>
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i}>{i}</div>
      ))}
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

  // it("should render on length change", () => {
  //   let ready = false;
  //   const wrap = (f: (...args: any[]) => void) => {
  //     return (...args: any[]) => {
  //       if (!ready) return;
  //       f(...args);
  //     };
  //   };
  //   const rootFn = vitest.fn();

  //   const itemCount = 4;
  //   const itemFns = Array.from({ length: itemCount }, (_) => vitest.fn());

  //   const Mounter = ({
  //     children,
  //     count: initialCount,
  //   }: {
  //     children: (count: number) => ReactElement;
  //     count: number;
  //   }): ReactElement => {
  //     const [count, setCount] = useState(initialCount);
  //     useEffect(() => {
  //       ready = true;
  //       setCount((prev) => {
  //         return prev - 1;
  //       });
  //     }, []);
  //     return children(count);
  //   };

  //   render(
  //     <Mounter count={itemCount}>
  //       {(count) => (
  //         <Profiler id="root" onRender={wrap(rootFn)}>
  //           <VList>
  //             {Array.from({ length: count }, (_, i) => {
  //               const key = `item-${i}`;
  //               return (
  //                 <Profiler key={key} id={key} onRender={wrap(itemFns[i]!)}>
  //                   <div>{i}</div>
  //                 </Profiler>
  //               );
  //             })}
  //           </VList>
  //         </Profiler>
  //       )}
  //     </Mounter>
  //   );

  //   expect(rootFn).toBeCalledTimes(2);
  //   itemFns.forEach((itemFn, i) => {
  //     expect(itemFn).toBeCalledTimes(i === itemFns.length - 1 ? 0 : 1);
  //   });
  // });

  // it("should render on length change many items", () => {
  //   let ready = false;
  //   const wrap = (f: (...args: any[]) => void) => {
  //     return (...args: any[]) => {
  //       if (!ready) return;
  //       f(...args);
  //     };
  //   };
  //   const rootFn = vitest.fn();

  //   const itemCount = 100;
  //   const itemFns = Array.from({ length: itemCount }, (_) => vitest.fn());

  //   const Mounter = ({
  //     children,
  //     count: initialCount,
  //   }: {
  //     children: (count: number) => ReactElement;
  //     count: number;
  //   }): ReactElement => {
  //     const [count, setCount] = useState(initialCount);
  //     useEffect(() => {
  //       ready = true;
  //       setCount((prev) => {
  //         return prev - 1;
  //       });
  //     }, []);
  //     return children(count);
  //   };

  //   render(
  //     <Mounter count={itemCount}>
  //       {(count) => (
  //         <Profiler id="root" onRender={wrap(rootFn)}>
  //           <VList>
  //             {Array.from({ length: count }, (_, i) => {
  //               const key = `item-${i}`;
  //               return (
  //                 <Profiler key={key} id={key} onRender={wrap(itemFns[i]!)}>
  //                   <div>{i}</div>
  //                 </Profiler>
  //               );
  //             })}
  //           </VList>
  //         </Profiler>
  //       )}
  //     </Mounter>
  //   );

  //   expect(rootFn).toBeCalledTimes(3);
  //   itemFns.forEach((itemFn) => {
  //     expect(itemFn.mock.calls.length).toBeLessThanOrEqual(2); // TODO: should be 1
  //   });
  // });
});
