import { describe, expect, it } from "vitest";
import {
	ACTION_ITEMS_LENGTH_CHANGE,
	ACTION_VIEWPORT_RESIZE,
	createVirtualStore,
} from "./store.js";

describe("createVirtualStore", () => {
	describe("$getRange", () => {
		it("should return valid range when viewport becomes 0 after removing all items", () => {
			const store = createVirtualStore(10, 50);

			// Viewport gets measured
			store.$update(ACTION_VIEWPORT_RESIZE, 500);
			store.$getRange();

			// Remove all items - this can cause internal _prevRange to become [-1, -1]
			store.$update(ACTION_ITEMS_LENGTH_CHANGE, [0, false]);
			store.$getRange();

			// Viewport collapses to 0
			store.$update(ACTION_VIEWPORT_RESIZE, 0);

			// $getRange should return a valid range, not [-1, -1]
			const range = store.$getRange();
			expect(range[0]).toBeGreaterThanOrEqual(0);
		});
	});
});
