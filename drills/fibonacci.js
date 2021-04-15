// each number is the sum of the two preceeding numbers
// 7th fibonacci number in the sequence is 13
// 1, 1, 2, 3, 5, 8, 13

const fibonacci = function(input) {
  if (input < 2) {
    return input
  }
  return fibonacci(input - 1) + fibonacci(input - 2)
}

let input = 4

console.log(fibonacci(input))