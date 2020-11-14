// klasa
function Person(firstName, lasName) {
this.firstName = firstName;
this.lasName = lasName;
// this.sayHello = function() {
//     console.log("Czesc! Nazywam się " + this.firstName + " " +this.lasName);
// }
}


Object.prototype.sayHello2 = function() {
    console.log("Czesc! Nazywam się " + this.firstName + " " +this.lasName);
}

// prototyp // dzieki temu nie duplikujemy metody sayhello
Person.prototype.sayHello = function() {
    console.log("Czesc! Nazywam się " + this.firstName + " " +this.lasName);
}

// fabryka //
function personFabric(firstName, lasName) {
    return {
        firstName: firstName,
        lasName: lasName,
        sayHello: function() {
            console.log("Czesc! Nazywam się " + this.firstName + " " +this.lasName);
        }
    }
}

var jan = {
    firstName: "Jan",
    lasName: "Kowalski",
    sayHello: function() {
        console.log("Czesc! Nazywam się " + this.firstName + " " +this.lasName);
    }
}

var anna = personFabric("Anna", "Nowak");
var jan2 = personFabric("Janek 2", "Kowalski 2");

jan.sayHello();
anna.sayHello();
jan2.sayHello();

// dla klasy //
var adam = new Person("Jan", "Kowalski");
var ewa = new Person ("Ewa", "Nowak");

adam.sayHello();
ewa.sayHello();