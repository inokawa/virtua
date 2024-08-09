function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i]!;
  arr[i] = arr[j]!;
  arr[j] = temp;
}

// Typescript implementation of C quickselect
// http://ndevilla.free.fr/median/median/
// http://ndevilla.free.fr/median/median/src/quickselect.c
export function quickSelect(arr: number[], n: number): number {
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
      let middle = Math.floor((low + high) / 2);

      if (arr[middle]! > arr[high]!) swap(arr, middle, high);
      if (arr[low]! > arr[high]!) swap(arr, low, high);
      if (arr[middle]! > arr[low]!) swap(arr, middle, low);

      // Swap low item (now in position middle) into position (low + 1)
      swap(arr, middle, low + 1);

      // Nibble from each end towards middle, swapping items when stuck
      let ll = low + 1;
      let hh = high;

      while (true) {
        do ll++;
        while (arr[ll]! < arr[low]!);
        do hh--;
        while (arr[hh]! > arr[low]!);

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

  const mid = Math.floor((n - 1) / 2);

  if (n % 2 === 1) {
    // Odd-length array: return the middle element
    return quickSelectInternal(arr, 0, n - 1, mid);
  } else {
    // Even-length array: return the average of the two middle elements
    const leftMid = quickSelectInternal(arr, 0, n - 1, mid);
    const rightMid = quickSelectInternal(arr, 0, n - 1, mid + 1);
    return (leftMid + rightMid) / 2;
  }
}
