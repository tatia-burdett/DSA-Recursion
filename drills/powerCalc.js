// function takes two params, integer as a base, and another integer as exponent. 
// function returns the value of the base raised to the power of the exponent
// use only exponents greater than or equal to 0

const powerCalculator = function(base, exponent) {
  if (exponent <= -1) {
    'exponent should be >= 0'
  }
  if(exponent === 0) {
    return 1
  }
  console.log(base, exponent)
  return base * powerCalculator(base, (exponent - 1))
}

console.log(powerCalculator(10, 2))