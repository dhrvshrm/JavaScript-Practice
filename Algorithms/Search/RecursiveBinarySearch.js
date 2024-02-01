function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return search(arr, target, left, mid - 1);
  return search(arr, target, mid + 1, right);
}

const result = recursiveBinarySearch([1, 2, 3, 4, 5], 4);
console.log(result);
