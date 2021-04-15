// Counting Sheep

const countSheep = function(input) {
  if (input === 0) {
    return `All sheep jumped over the fence`
  }
  console.log(`${input}: Another sheep jumped over the fence`)
  let newInput = input - 1
  return countSheep(newInput)
}

let input = 3

console.log(countSheep(input))