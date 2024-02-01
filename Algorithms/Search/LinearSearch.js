function linearSearch(array, target) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return "Target not found";
}

console.log(linearSearch([1, 2, 3, 4, 5], 3));
console.log(linearSearch([1, 2, 3, 4, 5], 6));
console.log(linearSearch([1, 2, 3, 4, 5], 5));
console.log(linearSearch([1, 2, 3, 4, 5], 1));
console.log(linearSearch([1, 2, 3, 4, 5], 2));
