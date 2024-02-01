const linearSearch1 = function linearSearch(array, target) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

const result = linearSearch1([1, 2, 3, 4, 5], 4);
console.log(result);
