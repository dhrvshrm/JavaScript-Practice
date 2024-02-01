function binarySearch(array, targetEl) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx <= rightIdx) {
    const middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (targetEl === array[middleIdx]) {
      return middleIdx;
    } else if (targetEl < array[middleIdx]) {
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }

  return -1;
}

const result = binarySearch([1, 2, 3, 4, 5], 4);
console.log(result);
