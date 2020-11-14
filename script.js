var name = "Andrzej";
var number = 18;

var prawda = true;
var falsz = false;
var pusta = null;
var niezdefiniowana;

console.log(typeof pusta);

var liczba1 = 10;
var liczba2 = 3;
var wynik1 = liczba1 + liczba2;
var wynik2 = liczba1 - liczba2;
var wynik3 = liczba1 * liczba2;
var wynik4 = liczba1 / liczba2;
var wynik5 = liczba1 % liczba2;

console.log(wynik1);
console.log(wynik2);
console.log(wynik3);
console.log(wynik4);
console.log(wynik5);

var napis1 = "Część";
napis1 += " Andrzej!";
console.log(napis1);

// operatory porownania //
// 2 < 3
// 2 <= 2
// 2 == "2"
// 2 === "2"

var imie = 'Rafał';

if(imie === "Andrzej"){
    console.log("Imie Andrzej");
} else {
    console.log("Imie inne niż Andrzej");
}
// wartosc fałszywa -> false, 0, "", undefined, null, NaN

// tablice
var tablica1 = [liczba1, liczba2, napis1];
// console.log(tablica1);
var tablica2 = [10, 20, 30, 40];
console.log(tablica2[0]);
console.log(tablica2[1]);
console.log(tablica2[tablica2.length-1]);
console.log(tablica2.length < 10);
console.log(tablica2.length == 10);

// pętle //
console.log(" Pętrla FOR ");
for(var i= 0; i < 10; i++){
    console.log("Cześć" + i + 1);
    console.log("Cześć" + (i+1));
}
for(var it = 0; it < tablica2.length; it++){
    console.log(tablica2[it]);
}

console.log(" Pętrla WHILE ");
var itr = 0;
while(itr < 10){
    console.log(itr);
    itr++;
}

// obiekty //
var obiekt0 = {};
var obiekt1 = {
    imie: "Andrzej",
    nazwisko: "Wierucki"
};

console.log(obiekt0);
console.log(obiekt1);


// funkcje //
function welcome() {
    console.log('Hello in function');
}

function helloPerson(name, surname) {
    console.log("Hello " + name + ' ' + surname);
}
helloPerson('Rafał', 'Wierucki');



