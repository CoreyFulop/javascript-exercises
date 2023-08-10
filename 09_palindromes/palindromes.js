const palindromes = function (string) {
    const array = string.split("");
    const filtered = array
                        .filter(item => !(item == " " || item == "." || item == "," || item == "!"))
                        .map(item => item.toUpperCase());
    for (let i = 0; i < filtered.length; i++) {
        if (filtered[i] != filtered[filtered.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
