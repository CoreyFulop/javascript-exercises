const reverseString = function(string) {
    let outString = "";
    let stringList = [];
    for (let char of string) {
        stringList.push(char);
    }
    while (stringList.length > 0) {
        outString += stringList.pop();
    }
    return outString;
};

// Do not edit below this line
module.exports = reverseString;
