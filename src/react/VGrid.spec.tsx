import { afterEach, it, expect, describe } from "vitest";
import { cleanup } from "@testing-library/react";
import { VGrid } from "./VGrid.js";
import { setupResizeJsDom } from "../../scripts/spec.js";
import { render } from "../../scripts/spec-react.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

afterEach(cleanup);

it("should pass attributes to element", () => {
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

describe("grid", () => {
  it("should render 1 children", () => {
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

// describe("render count", () => {
//   it("should render on mount", () => {
//     const rootFn = vi.fn();
//     const itemCount = 4;
//     const itemFns = Array.from({ length: itemCount }, (_) => vi.fn());

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
//     const rootFn = vi.fn();
//     const itemCount = 100;
//     const itemFns = Array.from({ length: itemCount }, (_) => vi.fn());

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
//     const rootFn = vi.fn();

//     const itemCount = 4;
//     const itemFns = Array.from({ length: itemCount }, (_) => vi.fn());

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
//     const rootFn = vi.fn();

//     const itemCount = 100;
//     const itemFns = Array.from({ length: itemCount }, (_) => vi.fn());

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
