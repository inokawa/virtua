/**
 * @jest-environment node
 */
import { it, describe, expect } from "@jest/globals";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { VList } from "./VList";

describe("SSR", () => {
  it("should render 10 items with renderToString", () => {
    expect(
      renderToString(
        <VList overscan={10}>
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </VList>
      )
    ).toMatchSnapshot();
  });

  it("should render 10 items with renderToStaticMarkup", () => {
    expect(
      renderToStaticMarkup(
        <VList overscan={10}>
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </VList>
      )
    ).toMatchSnapshot();
  });
});
