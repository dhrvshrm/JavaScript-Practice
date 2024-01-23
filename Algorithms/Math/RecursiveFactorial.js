function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));

// Big-O = O(n)

/*
recursiveFactorial(5)
= 5 * recursiveFactorial(4)
= 5 * (4 * recursiveFactorial(3))
= 5 * (4 * (3 * recursiveFactorial(2)))
= 5 * (4 * (3 * (2 * recursiveFactorial(1))))
= 5 * (4 * (3 * (2 * (1 * recursiveFactorial(0)))))
= 5 * (4 * (3 * (2 * (1 * 1))))
= 5 * (4 * (3 * (2 * 1)))
= 5 * (4 * (3 * 2))
= 5 * (4 * 6)
= 5 * 24
= 120
*/
