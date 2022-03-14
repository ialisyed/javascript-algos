let arr = [4, 5, 62, 2, 3, 1, 56, 6, 39, 8, 9];

function selectionSort(arr) {
  let minInd;
  for (let i = 0; i < arr.length; i++) {
    minInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minInd]) {
        minInd = j;
      }
    }
    if (i !== minInd) [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
  }
  return arr;
}

selectionSort(arr);
