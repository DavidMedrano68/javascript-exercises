const sumAll = function(num1, num2) {
    let arr = [num1,num2].sort()
    let min = arr[0]
    let max = arr[1]
    let sum = 0
    if(num1 < 0){
        return 'ERROR'
    }
    if(typeof num1 !== 'number'){
        return 'ERROR'
    }
    if(typeof num2 !== 'number'){
        return 'ERROR'
    }
    else{
        while (min <= max){
            sum = sum + min
            min+=1;
        }
        return sum
        
    }
};

// Do not edit below this line
module.exports = sumAll;
