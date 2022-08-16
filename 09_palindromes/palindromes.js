const palindromes = function (string) {
    const originalArr = string.toLowerCase().match(/\w/g)
    originalString = originalArr.join('')
    let reversedString = originalArr.reverse().join('')
    return originalString == reversedString ? true : false
};


// Do not edit below this line
module.exports = palindromes;
