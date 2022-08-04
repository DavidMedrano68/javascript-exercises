const leapYears = function(year) {
    let first = Number.isInteger(year/4);
    let second = Number.isInteger(year/100)
    let third = Number.isInteger(year/400)
    if(first === true && second == false){
        return true
    }
    if(second === true && third === true){
        return true
    }
    if(second === true){
        return false
    }else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
