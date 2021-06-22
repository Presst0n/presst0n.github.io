function getRandomNumbers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(charsLength) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < charsLength; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

function getArrayOfRandomNumbers(min, max, length = 1) {

    min = Math.ceil(min);
    max = Math.floor(max);
    let output = [];
    
    for (let i = 0; i < length; i++) {
        
        output.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return output;
}


module.exports = {
    getRandomNumbers: getRandomNumbers,
    getRandomString: getRandomString,
    getArrayOfRandomNumbers: getArrayOfRandomNumbers
}