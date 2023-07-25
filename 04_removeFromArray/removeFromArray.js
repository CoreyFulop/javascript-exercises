const removeFromArray = function(principalArray, ...removeArray) {
    for (let arrayElement of removeArray) {
        while (principalArray.includes(arrayElement)) {
            removalIndex = principalArray.indexOf(arrayElement);
            principalArray.splice(removalIndex, 1);
        }
    }
    return principalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
