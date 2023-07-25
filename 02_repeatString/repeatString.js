const repeatString = function(string, num) {
    let outString = "";
    if (num < 0) {
        outString += "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
            outString += string;
        }
    }
    return outString;
};

// Do not edit below this line
module.exports = repeatString;
