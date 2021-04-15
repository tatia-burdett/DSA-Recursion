// The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const triangular = function(n) {
  if (n === 1) {
    return 1
  }
  return n + triangular(n - 1)
}

let n = 7

console.log(triangular(n))