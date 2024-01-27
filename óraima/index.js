console.log("Hello")
String

//Int
//Float
//Boolean

//var oldvariable;
let myName = "Imre"
let szoveg = "Ez egy szöveg";
let szoveg2 = 'Ez egy karaktersor';
let szoveg3 = `Szia ${myName}`
const konstantSzoveg = "ABC";
let szam = 3;
let tort = 4.2;
let rosszSzam = "2";
let pi = Math.PI;
let igaz = true;
let hamis = false;
let egyenlo = 3 == 2+1;
let kissebb = 3 < 2;
let nagyobb = 3 > 4;
let and = egyenlo && kissebb;
let or = kissebb || egyenlo;

// Tömbök, Objektumok

const tomb = [1,2,3,4,];
let array = ["a", "b", "c"];
let array2 = [true,false,egyenlo, kissebb];
let array3 = [1, "a", true, [], array2];

//includes, push, splice

console.log(" A tönmb elemei:", tomb);
console.log("Tartalmaz-e 3-at?" ,tomb.includes(3))

//Töröljünk elemet a tömbből
tomb.splice(1, 1);
console.log("A tömb új elemekkel: ",tomb );

//Objektum : kulcs - érték
let person = {
name: "Imre" ,
age: 39,
gender: "male" ,
isTall: true,
}

let pet = {
    type: "cat"
}

console.log(person)
console.log(person.name)
console.log(person.age)

//For while


for (let index = 0; index < 10; index++) {
    const aktualisElem = index;
    console.log(aktualisElem)
}
    
function tombFeltolt(tombhossz){
    const tomb = [];
    for (let index = 0;index < tombhossz; index++) {
        tomb.push(index);
    }
    return tomb;
}
function tombFeltolt2(tombhossz){
    let index = 0;
    while (index != tombhossz) {
        tomb.push(index)
        index++;
    }
    return tomb;
    }

const newtomb = tombFeltolt(100);
console.log(newtomb)
const newtomb2 = tombFeltolt2(15);
console.log(newtomb2)


function paroszSzam(szam){
    if(szam % 2 == 0){ 
        console.log("Páros a számunk")
    else if (szam != 5) {
    console.log("Nem 5")}
    else if (szam != 7){
    console.log("Nem 7")}{
    console.log("Páratlank a számunk");
    }
}

const bekert = prompt("Adj meg egy stzámot!");
console.log("A bekért szám", bekert);

if(bekert != null || bekert != undefined){
    console.log(bekert * 2)
}

alert("Hiba történt!")