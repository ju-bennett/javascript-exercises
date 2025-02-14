//Implement a function that takes an array and some other arguments then removes the other arguments from that array:

const removeFromArray = function(array, ...args) {
    return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
