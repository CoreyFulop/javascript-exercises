const sumAll = function(num1, num2) {
    if ((num1 < 0 || num2 < 0) || (typeof num1 !== "number" || typeof num2 !== "number")) {
        return "ERROR";
    }
    if (num1 < num2) {
        let lower = num1;
        let upper = num2;
        let sum = 0;
        for (lower; lower <= upper; lower++) {
            sum += lower;
        }
        return sum;
    } else {
        let lower = num2;
        let upper = num1;
        let sum = 0;
        for (lower; lower <= upper; lower++) {
            sum += lower;
        }
        return sum;
    }   
};

// Do not edit below this line
module.exports = sumAll;
