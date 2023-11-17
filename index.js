// ES Exercises
'use strict';


// Use the let keyword in an example function
function letExampleFunction() {
    let letKeyword = "Harry Potter is located in London.";
    console.log(letKeyword)
}
letExampleFunction();

// Use the const keyword in an example function
function constExampleFunction() {
    const constKeyword = "Harry Potter is located in London.";
    console.log(constKeyword)
}
constExampleFunction();

// Create an arrow function that finds the square of a number
const square = (number) => {
    return number * number;
};

console.log(square(5));

// Create an arrow function that adds two numbers
const sum = (number1, number2) => {
    return number1 + number2;
}

console.log(sum(2, 3));

// Create a multi-line string and then split the string into the corresponding lines and print the lines
const multiLineString = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry standard dummy text ever since the 1500s?
When an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing.
Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;


const lines = multiLineString.split("\n")

lines.forEach((line, index) => {
    console.log(`Line ${index + 1} : ${line.trim()}`);
})

// Create a function that calculates the area of a circle. If the radius of the circle is not provided assume that the default radius is 5. Use the JavaScript default parameter feature to implement the function
function calculateCircleArea(radius = 5) {
    return 2 * Math.PI * Math.pow(radius, 2);
}

let area = calculateCircleArea().toFixed(2);
console.log(area);

//...................................................................................//

let person = {
    name: 'Harry Potter',
    location: 'London'
}

// Create a string that prints the name and location of the person in below format:
// "Harry Potter is located in London."

let string = `${person.name} is located in ${person.location}`;

console.log(string);

// Show an example where an array is destructured using destructuring assignment

let arr = [1, 2, 3, 4, 5, 6, 7];

const [a, b, c, ...rest] = arr;

console.log(a, b, c, rest);

// Show an example where an object is destructured using destructuring assignment in the function body

let Person = {
    name: 'John',
    family: {
        father: 'John Smith',
        mother: 'Zach Smith',
    },
}

let { name: n, family: { father: f, mother: m } } = Person;

console.log("name: " + n, "father: " + f, "mother: " + m);

// Show an example where a function argument which is an object is destructured inside the parantheses of the function

function displayUserInfo({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const user = {
    name: 'John Doe',
    age: 30,
    city: 'Example City'
};

displayUserInfo(user);

// Show an example where enhanced object literals is used.


const User = {
    name: 'John Doe',
    age: 30,
    city: 'Example City',
    displayUserInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
};

User.displayUserInfo();

// Create a function sum that takes any number of numbers as arguments and calculates the sum of the input numbers using the rest parameter syntax

function sumUsingRestParameter(...numbers) {
    return numbers.reduce((total, num) => {
        return total + num;
    }, 0);
}

const result = sumUsingRestParameter(1, 2, 3, 4, 5);
console.log(result);

// Use the spread syntax to expand an array of numbers and pass the elements of the array as arguments to the sum function created in the previous example

let numberList = [1, 2, 3, 4, 5];

let result2 = sumUsingRestParameter(...numberList);

console.log(result2);

// Use the for..of loop to iterate through all values in an array

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

// Iterate through all keys of an object using Object.keys

const obj = {
    name: 'John',
    age: 30,
    city: 'Example City'
};

const keys = Object.keys(obj);

for (const key of keys) {
    console.log(key, obj[key]);
}

// Iterate through all values of an object using Object.values

const values = Object.values(obj);

for (const value of values) {
    console.log(value);
}

// Iterate through all the key / value pairs of an object using Object.entries

const entries = Object.entries(obj);

for (const [key, value] of entries) {
    console.log(key, value);
}
