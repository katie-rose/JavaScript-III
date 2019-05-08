/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
The value of “this” will be the window/console Object when in global scope.
* 2. Implicit Binding
Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. New Binding
Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding
Whenever JavaScript’s call or apply method is used, this is explicitly defined.
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
}
sayName("Katie");

// Principle 2

// code example for Implicit Binding

const myNameObj = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myNameObj.sayHello('Katie');

// Principle 3

// code example for New Binding

function FriendlyPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const katie = new FriendlyPerson('Katie');
const chris = new FriendlyPerson('Chris');

katie.speak();
chris.speak();

// Principle 4

// code example for Explicit Binding

function FriendlyPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const katie = new FriendlyPerson('Katie');
const chris = new FriendlyPerson('Chris');

katie.speak();
chris.speak();

katie.speak.call(chris); chris.speak.apply(katie);