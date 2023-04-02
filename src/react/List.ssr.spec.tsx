/**
 * @jest-environment node
 */
import { it, describe, expect } from "@jest/globals";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { List } from "./List";

describe("SSR", () => {
  it("should render 10 items with renderToString", () => {
    expect(
      renderToString(
        <List overscan={10}>
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </List>
      )
    ).toMatchSnapshot();
  });

  it("should render 10 items with renderToStaticMarkup", () => {
    expect(
      renderToStaticMarkup(
        <List overscan={10}>
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </List>
      )
    ).toMatchSnapshot();
  });
});
