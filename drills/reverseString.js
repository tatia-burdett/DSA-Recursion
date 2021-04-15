// Function that reverses a string
// Takes string as input, reverse string, return a new string

const reverseString = function(string) {
  if (string === '') {
    return ''
  }
  return reverseString(string.substr(1)) + string.charAt(0)
}

let string = 'Hello'

console.log(reverseString(string))