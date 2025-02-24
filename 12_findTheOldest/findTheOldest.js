const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    
    return people.reduce((oldest, person) => {
        const ageOldest = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const agePerson = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        
        return agePerson > ageOldest ? person : oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
