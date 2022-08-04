const removeFromArray = function(arr) { 
    for(let i = 0; i< arguments.length; i++){
        if(arr.includes(arguments[i])){
            let location =arr.indexOf(arguments[i])
            arr.splice(location,1)
        }
    }
    return arr
}

// Do not edit below this line
module.exports = removeFromArray;
