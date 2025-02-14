const reverseString = function(str) {
    let text = str.split("")
    text.reverse();
    let reversedText = text.join("");
    return reversedText;
}

// Do not edit below this line
module.exports = reverseString;
