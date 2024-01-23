function primeNumber(n) {
  if (n <= 1) {
    return "Number is not prime";
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return "Number is not prime";
    }
  }
  return "Number is prime";
}

console.log(primeNumber(3));
console.log(primeNumber(4));
