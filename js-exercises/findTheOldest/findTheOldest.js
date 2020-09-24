let findTheOldest = function (peopleArr) {
    let oldest = {};
    let oldestAge = 0;
    peopleArr.forEach(person => {
        let age;
        if (person.yearOfDeath === undefined) {
            let date = new Date;
            age = date.getFullYear() - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if (age > oldestAge) {
            oldest = person;
            oldestAge = age;
        }
    });
    return oldest;
}

module.exports = findTheOldest