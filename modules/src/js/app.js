import $ from "jquery";
import Person from "./Person.js";

var john = new Person("John", "Doe");

// document.querySelector("h1").innerHTML = john.sayHello();
$("h1").html(john.sayHello());