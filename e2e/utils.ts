import { ElementHandle } from "@playwright/test";

export const storyUrl = (id: string) =>
  `http://localhost:6006/iframe.html?id=${id}&viewMode=story`;

export const scrollableSelector = '*[style*="overflow"]';
export const itemsSelector = '*[style*="top"]';

export const approxymate = (v: number): number => Math.round(v / 100) * 100;

export const clearInput = (input: ElementHandle<HTMLInputElement>) =>
  input.evaluate((element) => (element.value = ""));

export const getFirstItem = (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  return scrollable.evaluate((s) => {
    const rect = s.getBoundingClientRect();
    const el = document.elementFromPoint(rect.left + 1, rect.top + 1)!;
    const elRect = el.getBoundingClientRect();
    return {
      text: el.textContent!,
      top: elRect.top - rect.top,
      left: elRect.left - rect.left,
    };
  });
};

export const getLastItem = (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  return scrollable.evaluate((s) => {
    const rect = s.getBoundingClientRect();
    const el = document.elementFromPoint(rect.left + 1, rect.bottom - 1)!;
    return {
      text: el.textContent!,
      bottom: el.getBoundingClientRect().bottom - rect.bottom,
    };
  });
};
export const getFirstItemRtl = (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  return scrollable.evaluate((s) => {
    const rect = s.getBoundingClientRect();
    const el = document.elementFromPoint(rect.right - 1, rect.top + 1)!;
    return {
      text: el.textContent!,
      top: el.getBoundingClientRect().top - rect.top,
      right: el.getBoundingClientRect().right - rect.right,
    };
  });
};

export const scrollToBottom = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  await scrollable.evaluate((e) => {
    e.scrollTop = e.scrollHeight;
  });
  await scrollable.waitForElementState("stable");
  // FIXME: scroll twice to reach definitely
  await scrollable.evaluate((e) => {
    e.scrollTop = e.scrollHeight;
  });
  await scrollable.waitForElementState("stable");
};
export const scrollToRight = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  await scrollable.evaluate((e) => {
    e.scrollLeft = e.scrollWidth;
  });
  await scrollable.waitForElementState("stable");
  // FIXME: scroll twice to reach definitely
  await scrollable.evaluate((e) => {
    e.scrollLeft = e.scrollWidth;
  });
  await scrollable.waitForElementState("stable");
};
export const scrollToLeft = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  await scrollable.evaluate((e) => {
    e.scrollLeft = -e.scrollWidth;
  });
  await scrollable.waitForElementState("stable");
  // FIXME: scroll twice to reach definitely
  await scrollable.evaluate((e) => {
    e.scrollLeft = -e.scrollWidth;
  });
  await scrollable.waitForElementState("stable");
};

export const windowScrollToBottom = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  await scrollable.evaluate((e) => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await scrollable.waitForElementState("stable");
  // FIXME: scroll twice to reach definitely
  await scrollable.evaluate((e) => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await scrollable.waitForElementState("stable");
};

export const windowScrollToRight = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  await scrollable.evaluate((e) => {
    window.scrollTo(document.body.scrollWidth, 0);
  });
  await scrollable.waitForElementState("stable");
  // FIXME: scroll twice to reach definitely
  await scrollable.evaluate((e) => {
    window.scrollTo(document.body.scrollWidth, 0);
  });
  await scrollable.waitForElementState("stable");
};
