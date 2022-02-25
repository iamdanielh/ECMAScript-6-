function NewFunction(name, age, country) {
    var name = name || "Oscar";
    var age = age || 32;
    var country = country || "MX";
    console.log(name,age,country);
}

//es6
function newFunction2(name= "oscar", age = 32, country ="MX"){
    console.log(name, age, country);
};

newFunction2();
newFunction2("Ricardo", "23", "CO");

let hello = "Hello";
let world = "World"
let epicPhrase = hello + " " +world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem ="lorem bbla bla bla bla bla bla \n"
+ "otra frase epica que necesitemos."

//es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    "name2": "Oscar",
    "age": 32,
    "country": "MX",
}

console.log(person.name2, person.age, person.country);

let { name2, age, country } = person;
console.log(name2, age,country);

let team1 = ["Oscar","Julian","Ricardo"];
let team2 = ["Valeria","Yesica", "Camila"];

let education = ["David",...team1, ...team2];

console.log(education);

{
    var globalVar = "Global Var";
}

{
    let = globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

const a = "b";
a = "a";
console.log(a);

let name3 = "oscar";
let age = 32

//es6
obj = {name:name3, age:age};
//es5
obj2 = {name3,age}
console.log(obj2);