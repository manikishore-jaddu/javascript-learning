// var , let , const

var names = 'kishore';
var names = "mani";


let name = 'phani';
// Cannot redeclare block-scoped variable 'name'.
name = 'gani';


const customerName = 'pinky';

//customerName = 'deva';
//Cannot redeclare block-scoped variable 'name'.
//console.log(customerName);

// datatypes in js
// 1.String
let firstName = 'mani';
let greeting = 'Hello';
let message = "good morning";

//console.log(`${greeting} ${firstName} ${message}`);

// 2.Number
let age = 32;
const pi = 3.14;
// console.log(age + pi);


// 3. Boolean
let isLearning = true;
let isSleeping = false;
// console.log(isLearning);

// 4 . Null (intentional empty value)
let result = null;
//console.log(result);

// 5.Undefined (not assigned yet)
let score;
//console.log(score);
// 6.Object (key-value pairs)
let person = {
    name: 'mani',
    age: 32,
    isStrudent: true
}

console.log(person.age);





