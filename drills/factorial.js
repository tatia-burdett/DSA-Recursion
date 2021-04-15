const factorial = function(num) {
  if (num === 1) {
    return num
  }
  return num * factorial(num - 1)
}

let num = 5

console.log(factorial(num))