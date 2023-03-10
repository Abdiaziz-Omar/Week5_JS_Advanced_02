// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results

function Person(name, hobby){
    this.name = name
    this.age = 25
    this.hobby = hobby
}
Person.prototype.speak = function(){
    return `Hello my name is ${this.name} and i am ${this.age} years old i love ${this.hobby}`
}
const me = new Person("Abdiaziz", "Video game")
console.log(me.speak())
