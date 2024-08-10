import {
  findIndex as binaryFindIndex,
  computeOffset,
  getItemSize,
  type Cache,
} from "./cache";
import { clamp } from "./utils";

const linearFindIndex = (cache: Cache, offset: number, i: number): number => {
  while (i >= 0 && i < cache._length) {
    const itemOffset = computeOffset(cache, i);
    if (itemOffset <= offset) {
      if (itemOffset + getItemSize(cache, i) > offset) {
        break;
      } else {
        i++;
      }
    } else {
      i--;
    }
  }
  return clamp(i, 0, cache._length - 1);
};

// Mock data generation
function generateCache(length: number, itemSize: number): Cache {
  const sizes = Array.from({ length }, () => itemSize);
  const offsets = Array.from({ length }, (_, i) => i * itemSize);
  return {
    _length: length,
    _sizes: sizes,
    _defaultItemSize: itemSize,
    _computedOffsetIndex: -1,
    _offsets: offsets,
  };
}

function benchmark(
  findIndexFn: (cache: Cache, offset: number, i: number) => number,
  label: string,
) {
  const cache = generateCache(10_000, 90);
  const offsetToFind = 50_000;

  const iterations = 10000;
  let totalTime = 0;

  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    if (i === 0) {
      console.log(findIndexFn(cache, offsetToFind, 0));
    } else {
      findIndexFn(cache, offsetToFind, 0);
    }
    const end = performance.now();
    totalTime += end - start;
  }

  console.log(
    `${label} took ${totalTime.toFixed(2)} ms for ${iterations} iterations.`,
  );
}

function main() {
  console.log("Benchmarking linear search...");
  benchmark(linearFindIndex, "Linear Search");

  console.log("Benchmarking binary search...");
  benchmark(binaryFindIndex, "Binary Search");
}

main();
