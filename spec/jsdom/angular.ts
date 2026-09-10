import { vi } from "vitest";
import type { Type } from "@angular/core";
import { TestBed, type ComponentFixture } from "@angular/core/testing";

export const render = async <T>(
  component: Type<T>,
  inputs: Record<string, unknown> = {},
): Promise<{ fixture: ComponentFixture<T>; container: HTMLElement }> => {
  const fixture = TestBed.createComponent(component);
  for (const [key, value] of Object.entries(inputs)) {
    fixture.componentRef.setInput(key, value);
  }
  fixture.autoDetectChanges();
  const container: HTMLElement = fixture.nativeElement;
  let same = false;
  let prev = container.innerHTML;
  while (true) {
    vi.runAllTicks();
    await new Promise((resolve) => setTimeout(resolve, 50));
    const current = container.innerHTML;
    if (prev === current) {
      if (same) {
        break;
      } else {
        same = true;
      }
    } else {
      same = false;
    }
    prev = current;
  }
  return { fixture, container };
};
