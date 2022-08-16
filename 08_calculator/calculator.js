const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
  const result =arr.reduce((total,value)=>{
    return value+ total
  }, 0)
	return result
};

const multiply = function(arr) {
  const result = arr.reduce((a,b)=>{
    return a * b
  })
  return result
};

const power = function(a,b) {
  return Math.pow(a,b)
};

const factorial = function(num) {
  let result = num;
  if(num === 0 || num === 1){
    return 1
  }
  while(num > 1){
    num--;
    result *= num
  }
	return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
