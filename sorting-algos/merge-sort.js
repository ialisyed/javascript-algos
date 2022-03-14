let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8];

function mergeArr(arr1, arr2) {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      arr.push(arr2[j]);
      j++;
    } else {
      arr.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArr(left, right);
}

mergeSort([7, 26, 1, 2, 6, 3, 4]);
