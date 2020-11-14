// 1 // let //
/*
if (3 <10){
    let example = "Test example";
    console.log(example);
}
console.log(example); // Uncaught ReferenceError: example is not defined //
*/

// 2 // const //
/*
const person = {
    name: "Adam"
};

// person = "test for person"; // Uncaught TypeError: Assignment to constant variable

person.name = "Dawid";
console.log(person);
*/

// 3 // ` - back tik - interpolacja ${firstName}//
/*
let firstName = "John";
let lastName = "Doe";

console.log("Hi "+firstName+" "+lastName+"!"); // old
console.log(`Hi ${firstName} ${lastName}!`); // new

// let htmlExample1 = "<h1>Header 1</h1>
// <p>Example text</p>"; // Uncaught SyntaxError: Invalid or unexpected token

let htmlExample2 = `
    <h1>Header 1</h1>
    <p>Example text</p>
    `;
    console.log(htmlExample2); // return full code
*/

// 4 // funkcje strzałkowe - arrow functions  //
/*
function funExample1(params) {
    console.log(params);
}
funExample1('first');
// funkcja anonimowa
var funExample2 = function(params) {
    console.log(params);
}
funExample2('second');

// funkcja strzałkowa
var funArrow1 = () => console.log('fun arrow 1');
funArrow1();

var funArrow2 = () => 2;
console.log(funArrow2());

var funArrow3 = () => {
    return '3';
};
console.log(funArrow3());

let funArrow4 = (x , y) => {
    ;
    return x + y;
};
console.log(funArrow4(10,8));
*/

// 5 // klasy //

// old version //
function Person1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person1.prototype.sayHello = function(){
    console.log(`Hi ${this.firstName} ${this.lastName}!`);
}

let examplePerson1 = new Person1("John", "Doe");
examplePerson1.sayHello();

// new version //
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        console.log(`Hi ${this.firstName} ${this.lastName}! Welcome back!`);
    }
}

let examplePerson2 = new Person2("John", "Doe");
examplePerson2.sayHello();




