const person = {
    name: "Vijay",
    lastName: "Pandey",
    age: 21
}

function ageInDays(personObj, callback) {
    const FullName = `${personObj.name} ${personObj.lastName}`
    const ageDays = personObj.age * 365 ;
    callback(FullName, ageDays) ;
}

function logResult (FullName, ageDays) {
console.log(`The Person's Name Is ${FullName}. and Their age In Days Is ${ageDays}`)
}

ageInDays(person, logResult) ;


