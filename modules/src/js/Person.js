class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        return `Hi ${this.firstName} ${this.lastName}! Welcome back!`;
    }
}

export default Person;