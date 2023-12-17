// function sum(a:number,b:number):number {
//     return a*b;
// }
// console.log(sum(3,5));

let y: number; //explicitly declare
y = 9;
let x = 6; //implicitly declare
let z; // declaration without initializing it.
z = 1;
z = "one";

// boolean promotives
let flag: boolean;
flag = true;

let no = false;

// num & bigInt
let n: number;
let m = 10;
let o: number = 40;
let big: bigint = 100n;

//string type
let word: String = "hello World";
let empty: string = " ";

let myName: string = "yosaphat";
let sentences: string = `my name is ${myName},
                im new to typescript`;
console.log(sentences);

// enum data type

enum ContractStatus {
  permanent = 1, //remove 1 to see origin index of enum
  Temp,
  Apprentice,
}
let employeStatus: ContractStatus = ContractStatus.Temp;
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
let randomValue: unknown = 10;

randomValue = true;
randomValue = "Mateo";

if (typeof randomValue === "string") {
  console.log((randomValue as string).toUpperCase()); //* Returns MATEO to the console.
} else {
  console.log("Error - A string was expected here."); //* Returns an error message.
}

// // Unioin Type
// let multiType: number | boolean;
// multiType = 20; //* Valid
// multiType = true; //* Valid
// // multiType = "twenty";   //* if run it will be compiled as Invalid
// function add(x: number | string, y: number | string) {
//   if (typeof x === "number" && typeof y === "number") {
//     return x + y;
//   }
//   if (typeof x === "string" && typeof y === "string") {
//     return x.concat(y);
//   }
//   throw new Error("Parameters must be numbers or strings");
// }
// console.log(add("one", "two")); //* Returns "onetwo"
// console.log(add(1, 2)); //* Returns 3
// console.log(add("one", 2)); //* Returns error (check browser devtool console)

/*literal narrowing 
literal type */

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
// myResult = "failure";       //* Invalid

type testResult1 = "pass" | "fail" | "incomplete";
let myResult1: testResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
// myResult = "failure";       //* Invalid

//make function using interface
interface user {
  name: string;
  section: Number;
}
interface generatedData {
  userID: string;
}

//using type => combining 2 interface
type accountData = user & generatedData;

// id creator function
const generatedUserID = (): string => {
  const randomNumber = Math.floor(Math.random() * 26 + 65);
  const unicode = String.fromCharCode(randomNumber);
  const userID = `${unicode}${unicode}-${Math.floor(Math.random() * 1000)}`;
  return userID;
};

// defined data
let inputPersonData: accountData = {
  name: "jhon",
  section: 28,
  userID: generatedUserID(),
};

// make a greeting function
const greetingPerson = (User: accountData): String => {
  return `hello ${User.name.toUpperCase()} you are on section ${
    User.section
  },so thats why you have id of ${User.userID}`;
};

//uses
console.log(greetingPerson(inputPersonData)); // => hello JHON you are on section 28,so thats why you have id of SS-228

/* typescript OOP 
concept of OOP using typescript
*/

// class and Object

class car {
  brand: string;
  model: string;
  year: number;

// constructor function to create the object in car class

  constructor(brand:string, model:string, year:number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`starting this ${this.brand} ${this.model}`);
  }
}

// initiate object 
const myCar = new car("toyota","camry",2022); // create car variable using new keyword 
myCar.startEngine();
// encapsulation concept 
/* proces of promoting data abstraction and information hidding by controling access to 
internal state of an object*/

class bankAccount {
  private balance : number;

  constructor(initialBalance : number){
    this.balance = initialBalance;
  }
  getBalance(){
    return this.balance;
  }
  deposit(ammount:number){
    this.balance += ammount;
  }

  widthdrawal(amount:number){
    if(amount <= this.balance){
      this.balance -= amount;
    }
    else{
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
    protected brand:string;


  constructor(brand:string){
    this.brand = brand;
  }

  protected honk(){
    console.log(`${this.brand} is honking`)
  }
}

class Car extends vehicle{
  public start(){
    console.log(`${this.brand} is start`)
    this.honk() //accesing protected method
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
  protected name:string;

  constructor(name:string){
    this.name = name;
  }
  get _name(): string {
    return this.name; // this one need to be set first in order to pass name in some function
  }
  makeSound(){
    console.log("some generic sound");
  }
  public eat(){
    console.log(`${this.name} eating`)
  }
  public sleep(){
    console.log(`${this.name} is sleeping`)
  }
}


class bird extends animal{
  fly(){
    console.log(`${this.name} is flying`)
  }
  makeSound(): void {
    console.log(`${this._name} is chirping because all bird make chirp sound`)
  } // overide the makesound() from parent existing method element for more specific result in child element
}

let sparrow = new bird("tweety");
sparrow.makeSound();
sparrow.fly();

// another example
// making class for extending  parent class

class Dog extends animal{
  public bark(){
    console.log(`${this.name} is barking`)
  }
}
let doggie = new Dog("jimbo");
doggie.bark();
doggie.sleep();
doggie.eat();

class Cat extends animal{
  public meow(){
    console.log(`${this.name} is meowing`)
  }
}
let Kitten = new Cat("tom");
Kitten.meow();
Kitten.sleep();
Kitten.eat();

/* polymorphism 
Polymorphism is a core principle of Object-Oriented Programming (OOP)
that allows objects of different classes to be treated as instances of a common base class. */

function animalInfo(Animal:animal){
  console.log(`name :${Animal._name}`); // setup geter method on class animal first to acces name object ( see line: 239)
  Animal.makeSound();
}
let Bulldog = new animal("cheetos");
animalInfo(Bulldog);

let parrot = new bird("lucky")
animalInfo(parrot); //=>  works because bird extend animal

//method overload
class Callculator{
  public add(a:number,b:number):number;
  public add(a:string,b:string):string;
  public add(a:any, b:any):any{
    return a + b;
  }
}

const callculator = new Callculator();
const result1 = callculator.add(5,8);
console.log(result1);
const result2 = callculator.add("hello ", "world");
console.log(result2);

/*Abstraction class
An abstract class is a class that cannot be instantiated directly and serves as a blueprint for other classes.
It can contain both abstract and non-abstract methods, properties, and other members.
Abstract classes provide a way to define common behavior and characteristics that derived classes can inherit and implement.*/

abstract class shape {
  abstract calculatedArea(): number;
  display():void{
    console.log("displaying shape")
  }
}

class Circle extends shape{
  radius : number;
  constructor(radius:number){
    super(); //Calls the constructor of the shape class
    this.radius = radius;
  }
  calculatedArea(): number {
    return Math.PI*this.radius*this.radius
  }
}

/* interface
An interface is a contract that defines a set of properties and method signatures.
It establishes a contract between objects, specifying what properties and methods an object must have to satisfy the interface.
Interfaces provide a way to define common behavior without prescribing the specific implementation.
*/
interface printAble{
  print():void;
}

class Docoumented implements printAble{
  print():void{
    console.log("printing Document ....")
  }
}

class Photo implements printAble{
  print():void{
    console.log("printing photo......")
  }
}

const documentToPrint = new Docoumented();
documentToPrint.print();

const photograph = new Photo();
photograph.print();



