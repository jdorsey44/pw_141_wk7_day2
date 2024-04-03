1.
function displayFavoriteFood(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            console.log(`${key}:`);
            person[key].forEach(item => console.log(`- ${item}`));
        } else if (typeof person[key] === 'object') {
            console.log(`${key}:`);
            for (let subKey in person[key][0]) {
                console.log(`- ${person[key][0][subKey]} (${subKey})`);
            }
        } else {
            console.log(`${key}: ${person[key]}`);
        }
    }
}

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

displayFavoriteFood(person3);


2.
// Create our Person Prototype
let Person = function(name, age) {
    this.name = name;
    this.age = age;
};

// Use an arrow to create the printInfo method
Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
Person.prototype.addAge = () => {
    this.age++;
};

// Create two people using the 'new' keyword
let person1 = new Person("John", 30);
let person2 = new Person("Alice", 25);

// Print both of their infos
person1.printInfo();
person2.printInfo();

// Increment one person's age by 3 years
person1.addAge();
person1.addAge();
person1.addAge();

// Print the updated info
person1.printInfo();
person2.printInfo();


3.
function checkStringLength(string) {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}


checkStringLength("Hello World!")
    .then(message => console.log(message))
    .catch(error => console.log(error));

checkStringLength("Hello")
    .then(message => console.log(message))
    .catch(error => console.log(error));