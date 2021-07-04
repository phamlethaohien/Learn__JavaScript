// Number
var a = 1;
var b = 2;

console.log(typeof a);

// String
var myName = 'Thao Hien';

console.log(typeof myName);

// Boolean
var isSuccess = true;

console.log(typeof isSuccess);

// Undefined
var age;

console.log(age);

console.log(typeof age);

// Null
var isNull = null; //nothing

console.log(isNull);

console.log(typeof isNull); //object

// Symbol
var id = Symbol('description'); // unique
var id2 = Symbol('description');

console.log(id == id2);

console.log(typeof id);

// Function

var thisFunction = function() {
    console.log('Hello guys');
    // Đoạn code không chạy khi thực thi File main.js
}

    // Đoạn code chạy khi được gọi đến
thisFunction();

console.log(typeof thisFunction);

// OBJECT
var myObject = {
    age: 14,
    status: 'student',
    myFunction: function() {
        
    }
};

console.log('myObject', myObject);

console.log(typeof myObject);

var myArray = [
    'A',
    'B',
    'C',
    'D'
];

console.log(myArray);

console.log(typeof myArray);
