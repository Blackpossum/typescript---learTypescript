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
z = 'one';
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
let word = 'hello World';
let empty = " ";
let myName = 'yosaphat';
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
randomValue = 'Mateo';
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
// Unioin Type
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
// multiType = "twenty";   //* if run it will be compiled as Invalid
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error (check browser devtool console)
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
    userID: generatedUserID()
};
// make a greeting function
const greetingPerson = (User) => {
    return `hello ${User.name.toUpperCase()} you are on section ${User.section},so thats why you have id of ${User.userID}`;
};
//uses
console.log(greetingPerson(inputPersonData)); // => hello JHON you are on section 28,so thats why you have id of SS-228
