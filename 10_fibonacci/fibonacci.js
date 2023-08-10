const fibonacci = function(n) {
    let first = 1;
    let second = 1;
    if (n == 1 || n == 2) {
        return 1;
    } else if (n < 0) {
        return "OOPS"
    } else {
        let temp;
        for (let i = 0; i < n - 2; i++) {
            temp = first;
            first = second;
            second += temp;
        }
        return second;
    }

};

// Do not edit below this line
module.exports = fibonacci;
