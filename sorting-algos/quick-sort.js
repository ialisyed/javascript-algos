let arr = [4, 8, 2, 1, 5, 7, 6, 3];

function pivotInd(arr, startInd = 0, end = arr.length - 1) {
  let pivot = arr[startInd];
  swapIndex = startInd;

  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  for (let i = startInd + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, startInd, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = pivotInd(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

quickSort(arr);
