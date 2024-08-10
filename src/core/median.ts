// Typescript implementation of C quickselect
// http://ndevilla.free.fr/median/median/
// http://ndevilla.free.fr/median/median/src/quickselect.c
export function median(arr: number[], n: number): number | undefined {
  function swap(arr: number[], i: number, j: number): void {
    const temp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = temp;
  }
  function quickSelectInternal(
    arr: number[],
    low: number,
    high: number,
    k: number,
  ): number {
    while (true) {
      if (high <= low) {
        return arr[k]!;
      }

      if (high === low + 1) {
        if (arr[low]! > arr[high]!) {
          swap(arr, low, high);
        }
        return arr[k]!;
      }

      // Find median of low, middle, and high items; swap into position low
      const middle = (low + high) >> 1;

      if (arr[middle]! > arr[high]!) swap(arr, middle, high);
      if (arr[low]! > arr[high]!) swap(arr, low, high);
      if (arr[middle]! > arr[low]!) swap(arr, middle, low);

      // Swap low item (now in position middle) into position (low + 1)
      swap(arr, middle, low + 1);

      // Nibble from each end towards middle, swapping items when stuck
      let ll = low + 1;
      let hh = high;

      while (true) {
        while (arr[++ll]! < arr[low]!); // Pre-increment to avoid extra operations
        while (arr[--hh]! > arr[low]!); // Pre-decrement to avoid extra operations

        if (hh < ll) break;

        swap(arr, ll, hh);
      }

      // Swap middle item (in position low) back into the correct position
      swap(arr, low, hh);

      // Re-set active partition
      if (hh <= k) low = ll;
      if (hh >= k) high = hh - 1;
    }
  }

  if (!Array.isArray(arr)) {
    return; // Invalid input
  } else if (arr.length <= 1) {
    return arr[0]; // Directly return the first element
  } else if (arr.length === 2) {
    return (arr[0]! + arr[1]!) / 2; // Directly return the avg
  } else {
    const mid = (n - 1) >> 1;
    const left = quickSelectInternal(arr, 0, n - 1, mid);

    if ((n & 1) === 1) {
      // Odd-length array: return the middle element
      return left;
    }

    // Even-length array: return the average of the two middle elements
    return (left + quickSelectInternal(arr, 0, n - 1, mid + 1)) / 2;
  }
}
