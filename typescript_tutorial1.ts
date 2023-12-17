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
const myCar = new car("toyota","camry",2022);
myCar.startEngine();