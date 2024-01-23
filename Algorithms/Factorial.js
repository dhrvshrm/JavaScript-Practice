function factorial(n) {
  var result = 1;
  for (let i = 3; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(3));
console.log(factorial(4));
