"use strict";
// function sum(a:number,b:number):number {
//     return a*b;
// }
// console.log(sum(3,5));
let y; //explicitly declare
y = 9;
let x = 6; //implicitly declare
let z; // declaration without initializing it.
z = 1;
z = "one";
// boolean promotives
let flag;
flag = true;
let no = false;
// num & bigInt
let n;
let m = 10;
let o = 40;
let big = 100n;
//string type
let word = "hello World";
let empty = " ";
let myName = "yosaphat";
let sentences = `my name is ${myName},
                im new to typescript`;
console.log(sentences);
// enum data type
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["permanent"] = 1] = "permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeStatus = ContractStatus.Temp;
console.log(employeStatus);
console.log(ContractStatus[employeStatus]);
// unknow data type
// let randomValue: unknown = 10;
// randomValue = true;
// randomValue = 'Mateo';
// console.log(randomValue.name);  // Error: Object is of type unknown
// randomValue();                  // Error: Object is of type unknown
// randomValue.toUpperCase();      // Error: Object is of type unknown
//type assertion
let randomValue = 10;
randomValue = true;
randomValue = "Mateo";
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
let myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
let myResult1;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
// id creator function
const generatedUserID = () => {
    const randomNumber = Math.floor(Math.random() * 26 + 65);
    const unicode = String.fromCharCode(randomNumber);
    const userID = `${unicode}${unicode}-${Math.floor(Math.random() * 1000)}`;
    return userID;
};
// defined data
let inputPersonData = {
    name: "jhon",
    section: 28,
    userID: generatedUserID(),
};
// make a greeting function
const greetingPerson = (User) => {
    return `hello ${User.name.toUpperCase()} you are on section ${User.section},so thats why you have id of ${User.userID}`;
};
//uses
console.log(greetingPerson(inputPersonData)); // => hello JHON you are on section 28,so thats why you have id of SS-228
/* typescript OOP
concept of OOP using typescript
*/
// class and Object
class car {
    // constructor function to create the object in car class
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log(`starting this ${this.brand} ${this.model}`);
    }
}
// initiate object 
const myCar = new car("toyota", "camry", 2022); // create car variable using new keyword 
myCar.startEngine();
// encapsulation concept 
/* proces of promoting data abstraction and information hidding by controling access to
internal state of an object*/
class bankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(ammount) {
        this.balance += ammount;
    }
    widthdrawal(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("insuficient fund");
        }
    }
}
// call the function
const account = new bankAccount(50000);
account.deposit(20000);
// account.balance = 0; => this will return error because account balance canot be accessed publicly
console.log(`you curently have : Rp.${account.getBalance()},000`);
/* protected acces modifier*/
class vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    honk() {
        console.log(`${this.brand} is honking`);
    }
}
class Car extends vehicle {
    start() {
        console.log(`${this.brand} is start`);
        this.honk(); //accesing protected method
    }
}
const ride = new Car("Mitsubishi");
ride.start();
// ride.brand = "hyundai"; // => Property 'brand' is protected and only accessible within class 'vehicle' and its subclasses.
// ride.honk() // => Property 'honk' is protected and only accessible within class 'vehicle' and its subclasses
/* Inheritance
concept in Object-Oriented Programming (OOP)
that allows you to create new classes (derived classes) based on existing classes (base or parent classes)
*/
// This promotes code reusability, modularity, and the ability to model real-world relationships.
// we use existing class as an example, animal class in line : 165
class animal {
    constructor(name) {
        this.name = name;
    }
    get _name() {
        return this.name; // this one need to be set first in order to pass name in some function
    }
    makeSound() {
        console.log("some generic sound");
    }
    eat() {
        console.log(`${this.name} eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}
class bird extends animal {
    fly() {
        console.log(`${this.name} is flying`);
    }
    makeSound() {
        console.log(`${this._name} is chirping because all bird make chirp sound`);
    } // overide the makesound() from parent existing method element for more specific result in child element
}
let sparrow = new bird("tweety");
sparrow.makeSound();
sparrow.fly();
// another example
// making class for extending  parent class
class Dog extends animal {
    bark() {
        console.log(`${this.name} is barking`);
    }
}
let doggie = new Dog("jimbo");
doggie.bark();
doggie.sleep();
doggie.eat();
class Cat extends animal {
    meow() {
        console.log(`${this.name} is meowing`);
    }
}
let Kitten = new Cat("tom");
Kitten.meow();
Kitten.sleep();
Kitten.eat();
/* polymorphism
Polymorphism is a core principle of Object-Oriented Programming (OOP)
that allows objects of different classes to be treated as instances of a common base class. */
function animalInfo(Animal) {
    console.log(`name :${Animal._name}`); // setup geter method on class animal first to acces name object ( see line: 239)
    Animal.makeSound();
}
let Bulldog = new animal("cheetos");
animalInfo(Bulldog);
let parrot = new bird("lucky");
animalInfo(parrot); //=>  works because bird extend animal
//method overload
class Callculator {
    add(a, b) {
        return a + b;
    }
}
const callculator = new Callculator();
const result1 = callculator.add(5, 8);
console.log(result1);
const result2 = callculator.add("hello ", "world");
console.log(result2);
/*Abstraction class
An abstract class is a class that cannot be instantiated directly and serves as a blueprint for other classes.
It can contain both abstract and non-abstract methods, properties, and other members.
Abstract classes provide a way to define common behavior and characteristics that derived classes can inherit and implement.*/
class shape {
    display() {
        console.log("displaying shape");
    }
}
class Circle extends shape {
    constructor(radius) {
        super(); //Calls the constructor of the shape class
        this.radius = radius;
    }
    calculatedArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Docoumented {
    print() {
        console.log("printing Document ....");
    }
}
class Photo {
    print() {
        console.log("printing photo......");
    }
}
const documentToPrint = new Docoumented();
documentToPrint.print();
const photograph = new Photo();
photograph.print();
// convert color 
class Colorstack {
    constructor(R, G, B, A) {
        this.R = R;
        this.G = G;
        this.B = B;
        this.A = A;
    }
    makeRGBColor() {
        console.log(`${this.R} ,${this.B} ,${this.G}`);
    }
    makeRGBAcolor() {
        let defaultA = 1.0;
        if (this.A === undefined) {
            console.log(`rgb(${this.R},${this.B},${this.G},${defaultA})`);
        }
        else {
            console.log(`rgba(${this.R},${this.B},${this.G},${this.A})`);
        }
    }
    makeHexColor() {
        return '#' + ((1 << 24) + (this.R << 16) + (this.G << 8) + this.B).toString(16).slice(1);
    }
}
let firstColor = new Colorstack(189, 204, 200);
let SecondColor = new Colorstack(150, 40, 80, 0.5);
console.log(firstColor.makeHexColor());
console.log(SecondColor.makeHexColor());
firstColor.makeRGBColor();
SecondColor.makeRGBAcolor();
