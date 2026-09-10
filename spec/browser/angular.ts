import { onTestFinished } from "vitest";
import { type Type } from "@angular/core";
import { TestBed } from "@angular/core/testing";

export const render = (host: Type<unknown>) => {
  const fixture = TestBed.createComponent(host);
  onTestFinished(() => {
    fixture.destroy();
  });
  fixture.autoDetectChanges();
  return fixture.nativeElement as HTMLElement;
};
