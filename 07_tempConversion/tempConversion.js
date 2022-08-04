const ftoc = function(temp) {
  let C = 5/9 * (temp - 32)
  let result = Math.round(C*10)/10
    return result
};

const ctof = function(temp) {
  let F = (9/5 * temp)+ 32
    let result = Math.round(F*10)/10

  return result
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
