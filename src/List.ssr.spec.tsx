/**
 * @jest-environment node
 */
import { it, describe, expect } from "@jest/globals";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { List } from "./List";

describe("SSR", () => {
  it("should succeed with renderToString", () => {
    expect(
      renderToString(
        <List>
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </List>
      )
    ).toMatchSnapshot();
  });

  it("should succeed with renderToStaticMarkup", () => {
    expect(
      renderToStaticMarkup(
        <List>
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </List>
      )
    ).toMatchSnapshot();
  });
});
