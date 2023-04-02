import { afterEach, it, expect, describe /*jest*/ } from "@jest/globals";
import { render, cleanup /*waitFor*/ } from "@testing-library/react";
// import { useEffect, useRef } from "react";

import { List /*ListHandle */ } from "./List";

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

describe("vertical", () => {
  it("should render 1 children", async () => {
    const { asFragment } = render(
      <List>
        <div>0</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(
      <List>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const { asFragment } = render(
      <List>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1000 children", () => {
    const { asFragment } = render(
      <List>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const { asFragment } = render(
      <List>
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", () => {
    const { asFragment } = render(
      <List>
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", () => {
    const { asFragment } = render(
      <List>
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = render(
      <List>
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const { asFragment } = render(
      <List style={{ width: 100, height: 800 }}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 1 children", async () => {
    const { asFragment } = render(
      <List horizontal>
        <div>0</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(
      <List horizontal>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const { asFragment } = render(
      <List horizontal>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1000 children", () => {
    const { asFragment } = render(
      <List horizontal>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const { asFragment } = render(
      <List horizontal>
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", () => {
    const { asFragment } = render(
      <List horizontal>
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", () => {
    const { asFragment } = render(
      <List horizontal>
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = render(
      <List horizontal>
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const { asFragment } = render(
      <List horizontal style={{ width: 100, height: 800 }}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

// describe("reverse", () => {
//   it("should render if vertical", () => {
//     const { asFragment } = render(
//       <List>
//         {Array.from({ length: 100 }).map((_, i) => (
//           <div key={i}>{i}</div>
//         ))}
//       </List>
//     );
//     expect(asFragment()).toMatchSnapshot();
//   });

//   it("should render if horizontal", () => {
//     const { asFragment } = render(
//       <List horizontal>
//         {Array.from({ length: 100 }).map((_, i) => (
//           <div key={i}>{i}</div>
//         ))}
//       </List>
//     );
//     expect(asFragment()).toMatchSnapshot();
//   });
// });

// describe("scrollToIndex", () => {
//   describe("vertical", () => {
//     it("should scroll to 0", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollTop",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(0);
//         }, []);
//         return (
//           <List ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       expect(scrollSpy).toHaveBeenCalledWith(0);
//     });

//     it("should scroll to 567", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollTop",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(567);
//         }, []);
//         return (
//           <List ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       expect(scrollSpy).toHaveBeenCalledWith(40 * 567);
//     });

//     it("should scroll to 999", async () => {
//       // const scrollSpy = jest.spyOn(
//       //   global.HTMLElement.prototype,
//       //   "scrollTop",
//       //   "set"
//       // );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(999);
//         }, []);
//         return (
//           <List ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       const { asFragment } = render(<Mounter />);
//       // await waitFor(() => {
//       //   expect(scrollSpy).toHaveBeenCalled();
//       // });
//       // expect(scrollSpy).toHaveBeenCalledWith(40 * 999);
//       expect(asFragment()).toMatchSnapshot();
//     });

//     it("should scroll to end if index is out of range", async () => {
//       // const scrollSpy = jest.spyOn(
//       //   global.HTMLElement.prototype,
//       //   "scrollTop",
//       //   "set"
//       // );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(9999);
//         }, []);
//         return (
//           <List ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       const { asFragment } = render(<Mounter />);
//       // await waitFor(() => {
//       //   expect(scrollSpy).toHaveBeenCalled();
//       // });
//       // expect(scrollSpy).toHaveBeenCalledWith(40 * 1000);
//       expect(asFragment()).toMatchSnapshot();
//     });
//   });

//   describe("horizontal", () => {
//     it("should scroll to 0", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollLeft",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(0);
//         }, []);
//         return (
//           <List horizontal ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       expect(scrollSpy).toHaveBeenCalledWith(0);
//     });

//     it("should scroll to 567", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollLeft",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(567);
//         }, []);
//         return (
//           <List horizontal ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       expect(scrollSpy).toHaveBeenCalledWith(40 * 567);
//     });

//     it("should scroll to 999", async () => {
//       // const scrollSpy = jest.spyOn(
//       //   global.HTMLElement.prototype,
//       //   "scrollLeft",
//       //   "set"
//       // );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(999);
//         }, []);
//         return (
//           <List horizontal ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       const { asFragment } = render(<Mounter />);
//       // await waitFor(() => {
//       //   expect(scrollSpy).toHaveBeenCalled();
//       // });
//       // expect(scrollSpy).toHaveBeenCalledWith(40 * 999);
//       expect(asFragment()).toMatchSnapshot();
//     });

//     it("should scroll to end if index is out of range", async () => {
//       // const scrollSpy = jest.spyOn(
//       //   global.HTMLElement.prototype,
//       //   "scrollLeft",
//       //   "set"
//       // );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(9999);
//         }, []);
//         return (
//           <List horizontal ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       const { asFragment } = render(<Mounter />);
//       // await waitFor(() => {
//       //   expect(scrollSpy).toHaveBeenCalled();
//       // });
//       // expect(scrollSpy).toHaveBeenCalledWith(40 * 1000);
//       expect(asFragment()).toMatchSnapshot();
//     });
//   });

//   describe("vertical reverse", () => {
//     it("should scroll to 0", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollTop",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(0);
//         }, []);
//         return (
//           <List reverse ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       expect(scrollSpy).toHaveBeenCalledWith(-0);
//     });

//     it("should scroll to 567", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollTop",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(567);
//         }, []);
//         return (
//           <List reverse ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       expect(scrollSpy).toHaveBeenCalledWith(-40 * 567);
//     });

//     it("should scroll to 999", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollTop",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(999);
//         }, []);
//         return (
//           <List reverse ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       expect(scrollSpy).toHaveBeenCalledWith(-40 * 999);
//     });

//     it("should scroll to end if index is out of range", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollTop",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(9999);
//         }, []);
//         return (
//           <List reverse ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       // expect(scrollSpy).toHaveBeenCalledWith(-40 * 1000);
//       expect(scrollSpy).toHaveBeenCalledWith(-40 * 999);
//     });
//   });

//   describe("horizontal reverse", () => {
//     it("should scroll to 0", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollLeft",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(0);
//         }, []);
//         return (
//           <List horizontal reverse ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       expect(scrollSpy).toHaveBeenCalledWith(-0);
//     });

//     it("should scroll to 567", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollLeft",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(567);
//         }, []);
//         return (
//           <List horizontal reverse ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       expect(scrollSpy).toHaveBeenCalledWith(-40 * 567);
//     });

//     it("should scroll to 999", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollLeft",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(999);
//         }, []);
//         return (
//           <List horizontal reverse ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       expect(scrollSpy).toHaveBeenCalledWith(-40 * 999);
//     });

//     it("should scroll to end if index is out of range", async () => {
//       const scrollSpy = jest.spyOn(
//         global.HTMLElement.prototype,
//         "scrollLeft",
//         "set"
//       );

//       const Mounter = () => {
//         const ref = useRef<ListHandle>(null);
//         useEffect(() => {
//           ref.current?.scrollToIndex(9999);
//         }, []);
//         return (
//           <List horizontal reverse ref={ref}>
//             {Array.from({ length: 1000 }).map((_, i) => (
//               <div key={i}>{i}</div>
//             ))}
//           </List>
//         );
//       };
//       render(<Mounter />);
//       await waitFor(() => {
//         expect(scrollSpy).toHaveBeenCalled();
//       });
//       // expect(scrollSpy).toHaveBeenCalledWith(-40 * 1000);
//       expect(scrollSpy).toHaveBeenCalledWith(-40 * 999);
//     });
//   });
// });
