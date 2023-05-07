import { Meta, StoryObj } from "@storybook/react";
import { CustomWindowComponentProps, VList } from "../../src";
import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useState,
} from "react";
import { faker } from "@faker-js/faker";
import PullToRefresh from "react-pull-to-refresh";

export default {
  component: VList,
} as Meta;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const RefreshContext = createContext(async () => {});

const listStyle = { width: 400, height: 600 };

const Window = forwardRef<HTMLDivElement, CustomWindowComponentProps>(
  ({ children, attrs, scrollSize }, ref) => {
    const onRefresh = useContext(RefreshContext);

    return (
      <PullToRefresh
        onRefresh={onRefresh}
        style={{ ...listStyle, position: "relative", overflow: "hidden" }}
      >
        <div ref={ref} {...attrs}>
          <div style={{ height: scrollSize }}>{children}</div>
        </div>
      </PullToRefresh>
    );
  }
);

export const Default: StoryObj = {
  name: "PullToRefresh",
  render: () => {
    const refreshItems = () =>
      Array.from({ length: 1000 }, () => ({
        id: faker.datatype.number(),
      }));

    const [items, setItems] = useState(refreshItems);

    return (
      <div>
        <div>pull down this list!</div>
        <RefreshContext.Provider
          value={useCallback(async () => {
            await delay(500);
            setItems(refreshItems());
          }, [])}
        >
          <VList style={listStyle} element={Window}>
            {items.map((d) => {
              return (
                <div
                  key={d.id}
                  style={{
                    height: 80,
                    borderBottom: "solid 1px #ccc",
                    background: "#fff",
                  }}
                >
                  {d.id}
                </div>
              );
            })}
          </VList>
        </RefreshContext.Provider>
        <style>{`
.ptr-element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #aaa;
  z-index: 10;
  text-align: center;
  height: 50px;
  transition: all;
}

.ptr-element .genericon {
  opacity: 0.6;
  font-size: 34px;
  width: auto;
  height: auto;
  transition: all 0.25s ease;
  transform: rotate(90deg);
  margin-top: 5px;
}
.ptr-refresh .ptr-element .genericon {
  transform: rotate(270deg);
}
.ptr-loading .ptr-element .genericon,
.ptr-reset .ptr-element .genericon {
  display: none;
}

.loading {
  display: inline-block;
  text-align: center;
  opacity: 0.4;
  display: none;
}
.ptr-loading .loading {
  display: block;
}

.loading span {
  display: inline-block;
  vertical-align: middle;
  width: 10px;
  height: 10px;
  margin-right: 3px;
  transform: scale(0.3);
  border-radius: 50%;
  animation: ptr-loading 0.4s infinite alternate;
}

.loading-ptr-1 {
  animation-delay: 0 !important;
}

.loading-ptr-2 {
  animation-delay: 0.2s !important;
}

.loading-ptr-3 {
  animation-delay: 0.4s !important;
}

@keyframes ptr-loading {
  0% {
    transform: translateY(0) scale(0.3);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    background-color: #333;
    opacity: 1;
  }
}

.ptr-loading .refresh-view,
.ptr-reset .refresh-view,
.ptr-loading .ptr-element,
.ptr-reset .ptr-element {
  transition: all 0.25s ease;
}

.ptr-reset .refresh-view {
  transform: translate3d(0, 0, 0);
}

.ptr-loading .refresh-view {
  transform: translate3d(0, 30px, 0);
}
`}</style>
      </div>
    );
  },
};
