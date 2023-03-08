let name = "Ahmed", birthYear = "2001", jobTitle = "frontend web developer", nationality = "egyptian"

// DON'T
console.log("Hello there, My name is " + name + ", I'm an " + nationality + " " + jobTitle + " who was born in " + birthYear + ".")

// DO
console.log(`Hello there, My name is ${name}, I'm an ${nationality} ${jobTitle} who was born in ${birthYear}.`)
