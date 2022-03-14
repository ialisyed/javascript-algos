const findMinCost = (arr) => {
  const len = arr.length;
  const newArr = [...arr];

  newArr.sort((a, b) => a - b);

  const dp = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < len; j++) {
      min = Math.min(min, dp[j]);
      dp[j] = min + Math.abs(arr[i] - newArr[j]);
    }
  }

  const min = Math.min(...dp);
  return min;
};

function minCostSortArray(arr) {
  // Write your code here
  if (arr.length < 3) {
    return 0;
  }
  let ans = findMinCost(arr);
  arr = arr.map((i) => -i);
  return Math.min(ans, findMinCost(arr));
}
