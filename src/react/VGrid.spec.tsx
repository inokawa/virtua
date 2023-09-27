import { afterEach, it, expect, describe } from "@jest/globals";
import { render, cleanup } from "@testing-library/react";
import { VGrid } from "./VGrid";

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

it("should pass attributes to element", async () => {
  const { asFragment } = render(
    <VGrid
      id="id"
      className="class"
      tabIndex={0}
      role="list"
      aria-label="test"
      style={{ background: "red" }}
      row={100}
      col={100}
    >
      {({ rowIndex, colIndex }) => (
        <div>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>
  );
  expect(asFragment()).toMatchSnapshot();
});

// it("should change components", async () => {
//   const UlList = forwardRef<HTMLDivElement, CustomViewportComponentProps>(
//     ({ children, attrs, scrollSize }, ref) => {
//       return (
//         <div ref={ref} {...attrs}>
//           <ul style={{ position: "relative", height: scrollSize, margin: 0 }}>
//             {children}
//           </ul>
//         </div>
//       );
//     }
//   );
//   const { asFragment } = render(
//     <VList components={{ Root: UlList, Item: "li" }}>
//       <div>0</div>
//       <div>1</div>
//       <div>2</div>
//       <div>3</div>
//       <div>4</div>
//     </VList>
//   );
//   expect(asFragment()).toMatchSnapshot();
// });

// describe("render count", () => {
//   it("should render on mount", () => {
//     const rootFn = jest.fn();
//     const itemCount = 4;
//     const itemFns = Array.from({ length: itemCount }, (_) => jest.fn());

//     render(
//       <Profiler id="root" onRender={rootFn}>
//         <VList>
//           {Array.from({ length: itemCount }, (_, i) => {
//             const key = `item-${i}`;
//             return (
//               <Profiler key={key} id={key} onRender={itemFns[i]!}>
//                 <div>{i}</div>
//               </Profiler>
//             );
//           })}
//         </VList>
//       </Profiler>
//     );

//     expect(rootFn).toBeCalledTimes(2);
//     itemFns.forEach((itemFn) => {
//       expect(itemFn).toHaveBeenCalledTimes(1);
//     });
//   });

//   it("should render on mount many items", () => {
//     const rootFn = jest.fn();
//     const itemCount = 100;
//     const itemFns = Array.from({ length: itemCount }, (_) => jest.fn());

//     render(
//       <Profiler id="root" onRender={rootFn}>
//         <VList>
//           {Array.from({ length: itemCount }, (_, i) => {
//             const key = `item-${i}`;
//             return (
//               <Profiler key={key} id={key} onRender={itemFns[i]!}>
//                 <div>{i}</div>
//               </Profiler>
//             );
//           })}
//         </VList>
//       </Profiler>
//     );

//     expect(rootFn).toBeCalledTimes(3);
//     itemFns.forEach((itemFn) => {
//       expect(itemFn.mock.calls.length).toBeLessThanOrEqual(1);
//     });
//   });

//   it("should render on length change", () => {
//     let ready = false;
//     const wrap = (f: (...args: any[]) => void) => {
//       return (...args: any[]) => {
//         if (!ready) return;
//         f(...args);
//       };
//     };
//     const rootFn = jest.fn();

//     const itemCount = 4;
//     const itemFns = Array.from({ length: itemCount }, (_) => jest.fn());

//     const Mounter = ({
//       children,
//       count: initialCount,
//     }: {
//       children: (count: number) => ReactElement;
//       count: number;
//     }): ReactElement => {
//       const [count, setCount] = useState(initialCount);
//       useEffect(() => {
//         ready = true;
//         setCount((prev) => {
//           return prev - 1;
//         });
//       }, []);
//       return children(count);
//     };

//     render(
//       <Mounter count={itemCount}>
//         {(count) => (
//           <Profiler id="root" onRender={wrap(rootFn)}>
//             <VList>
//               {Array.from({ length: count }, (_, i) => {
//                 const key = `item-${i}`;
//                 return (
//                   <Profiler key={key} id={key} onRender={wrap(itemFns[i]!)}>
//                     <div>{i}</div>
//                   </Profiler>
//                 );
//               })}
//             </VList>
//           </Profiler>
//         )}
//       </Mounter>
//     );

//     expect(rootFn).toBeCalledTimes(2);
//     itemFns.forEach((itemFn, i) => {
//       expect(itemFn).toBeCalledTimes(i === itemFns.length - 1 ? 0 : 1);
//     });
//   });

//   it("should render on length change many items", () => {
//     let ready = false;
//     const wrap = (f: (...args: any[]) => void) => {
//       return (...args: any[]) => {
//         if (!ready) return;
//         f(...args);
//       };
//     };
//     const rootFn = jest.fn();

//     const itemCount = 100;
//     const itemFns = Array.from({ length: itemCount }, (_) => jest.fn());

//     const Mounter = ({
//       children,
//       count: initialCount,
//     }: {
//       children: (count: number) => ReactElement;
//       count: number;
//     }): ReactElement => {
//       const [count, setCount] = useState(initialCount);
//       useEffect(() => {
//         ready = true;
//         setCount((prev) => {
//           return prev - 1;
//         });
//       }, []);
//       return children(count);
//     };

//     render(
//       <Mounter count={itemCount}>
//         {(count) => (
//           <Profiler id="root" onRender={wrap(rootFn)}>
//             <VList>
//               {Array.from({ length: count }, (_, i) => {
//                 const key = `item-${i}`;
//                 return (
//                   <Profiler key={key} id={key} onRender={wrap(itemFns[i]!)}>
//                     <div>{i}</div>
//                   </Profiler>
//                 );
//               })}
//             </VList>
//           </Profiler>
//         )}
//       </Mounter>
//     );

//     expect(rootFn).toBeCalledTimes(3);
//     itemFns.forEach((itemFn) => {
//       expect(itemFn.mock.calls.length).toBeLessThanOrEqual(2); // TODO: should be 1
//     });
//   });
// });

describe("grid", () => {
  it("should render 1 children", async () => {
    const { asFragment } = render(
      <VGrid row={1} col={1}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 4x4 children", () => {
    const { asFragment } = render(
      <VGrid row={4} col={4}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100x100 children", () => {
    const { asFragment } = render(
      <VGrid row={100} col={100}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1000x1000 children", () => {
    const { asFragment } = render(
      <VGrid row={1000} col={1000}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000x10000 children", () => {
    const { asFragment } = render(
      <VGrid row={10000} col={10000}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", () => {
    const { asFragment } = render(
      <VGrid row={6} col={1}>
        {({ rowIndex }) =>
          rowIndex === 0
            ? "string"
            : rowIndex === 1
            ? true
            : rowIndex === 2
            ? false
            : rowIndex === 3
            ? null
            : rowIndex === 4
            ? undefined
            : 123
        }
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", () => {
    const { asFragment } = render(
      <VGrid row={2} col={1}>
        {({ rowIndex }) =>
          rowIndex === 0 ? (
            <>
              <div>fragment</div>
              <div>fragment</div>
              <div>fragment</div>
            </>
          ) : (
            <>
              <div>fragment</div>
            </>
          )
        }
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = render(
      <VGrid row={100} col={100}>
        {({ rowIndex, colIndex }) => (
          <Comp>
            {rowIndex} / {colIndex}
          </Comp>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const { asFragment } = render(
      <VGrid row={4} col={4} style={{ width: 100, height: 100 }}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
