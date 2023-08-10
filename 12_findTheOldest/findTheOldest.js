const findTheOldest = function(people) {
        return people.reduce(function (oldestPerson, currentPerson){
            if (!("yearOfDeath" in currentPerson)) {
                currentPerson["yearOfDeath"] = new Date().getFullYear();
            }
            let oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
            let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
            if (currentAge > oldestAge) {
                return currentPerson;
            } else {
                return oldestPerson;
            }
        }, {yearOfBirth: 0, yearOfDeath: 0,});

};

// Do not edit below this line
module.exports = findTheOldest;
