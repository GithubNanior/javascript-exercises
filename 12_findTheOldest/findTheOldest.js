const findTheOldest = function(people) {
    if (people.length == 0)
    {
        return undefined;
    }

    let oldestAge = 0;
    let oldest;
    people.forEach((person) => {
        const age = (person.yearOfDeath === undefined ? new Date().getFullYear(): person.yearOfDeath) - person.yearOfBirth;
        
        if (age > oldestAge) 
        {
            oldestAge = age;
            oldest = person;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
