/*
Goals to write functions using oldschool and fat arrow notation
practicing with function methods
practicing with strings
instanceof vs typeof (what happens with arrays?)
++numb = increment by 1
--num = decrement by 1
practicing with math
parseInt(), parseFloat(), toString()
you can evaluate math within template literals
How to use Try, Catch, and Finally in detecting errors
TODO:
Boolean
Ternary and If statements -> write a ternary as an if statement
*/

/* EXERCISE 1: Hello World

Run the below reindeer function and follow the order in which the code gets executed.*/

const a = 'Rudolph';
console.log('Variable a gets initialized first');

function reindeer(a){
    console.log('The function then uses the initialized variable a as its argument');
    console.log('The function then outputs a + "The Rednosed Reindeer"');
    console.log(`${a}`, 'The Rednosed Reindeer')
};

console.log('The function reindeer then gets called');
console.log(reindeer(a));


/* Now, complete the function below such that the function greetings gets called and the message is outputed
HINT: Only one console.log, the one that's already there, is needed. Can you call the function during the variable initialization? */

const declaration = greetings(salute = "Hello, ", place = "World!");

function greetings(salute, place){
    const message = `${salute}, ${place}`;
    return message
};

console.log(declaration);

const ... = ...(salute = "Hello, ", place = "World!");

function ...(..., ...){
    const ... = `${salute}, ${place}`;
    return ...
};

console.log(...);


/* Exercise 2: Create a function that takes in the provided string and returns the string in reverse. 
e.g if input -> Hello World, Output -> dlroW olleH
HINT: the string method split() and array method forEach() may be particularly useful here. */

const value = 'My Name is Nikos';

console.log(value.split(''));

function reverseString (value) {
    let reversedValue = ''

    value.split('').forEach( function (char) {
        reversedValue = char + reversedValue
        console.log(reversedValue)
    });

    return reversedValue
};

console.log(reverseString(value));

/* EXERCISE 3: Fibonacci Sequence.
Using a for loop, output the fibonacci sequence for the first 10 terms in the fibonacci sequence. */
let n1 = 0, n2 = 1, nextTerm;

for (let i = 0; i <= 10; i++) {
    console.log(n1);
    nextTerm = n1 + n2;    
    n1 = n2;
    n2 = nextTerm;
}

/* Now write the same fibonacci sequence using a while loop */

let i1 = 0;
while (i1 <= 10) {
    console.log(i1);
    console.log(n1);
    nextTerm = n1 + n2;    
    n1 = n2;
    n2 = nextTerm;
    i1++;
}


/* EXERCISE 4 (taken from Github):
Create a program that lists every 3rd number between 1-20 and prints it to the console.
Feel free to answer using a function, for loop, or while loop. */
for (let k=1; k <=20; k++) { 
    if (k % 3 === 0) {
        console.log(k);
    }
}

/* EXERCISE 5: Practicing with Dictionaries (taken from Github but modified)
First Grading System:
One grading system is defined as grades being from 1-5 where 3 and above means you pass the course.

Second Grading System:
The other grade system has the following grades A, A-, B, B-, C, C- where A is the top grade and C is the lowest passing grade.

The task:
Given the following array allStudents representing all students and their grades, construct a new array studentsWhoPass containing all students who pass.
*/

let allStudents = {
  'StudentA' : 'A',
  'StudentB' : 'B-',
  'StudentC' : 1,
  'StudentD' : 4,
  'StudentE' : 5,
  'StudentF' : 2
}

let studentsWhoPass = [];

// YOUR CODE BELOW // 
const dict_length = Object.keys(allStudents).length;

for (const [key, value] of Object.entries(allStudents)) {
    if (value == 'A') {
        console.log(key, value);
        studentsWhoPass.push(key);
    } 
    if (value == 'B-') {
        console.log(key, value);
        studentsWhoPass.push(key);
    } 
    if (value >= 3) {
    console.log(key, value);
    studentsWhoPass.push(key);
    }
    
}
console.log(studentsWhoPass);

/* Rewrite the above solution as a ternary expression */ 
for (const [key, value] of Object.entries(allStudents)) {
    let x = value == 'A' || value == 'B-' || value >= 3 ? studentsWhoPass.push(key) : console.log('Pass');
}
console.log(studentsWhoPass);

/* EXERCISE 6: MATH!
Write function that finds the distance between two Cartesian points */
function distanceCalculate(x1,x2,y1,y2) {
   return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
}
console.log(distanceCalculate(1,2,1,2));

/* Write above function using fat arrow notation */
let distanceCalculator = (x_1,x_2,y_1,y_2) => {return Math.sqrt(Math.pow((x_2-x_1),2) + Math.pow((y_2-y_1),2));}
console.log(distanceCalculator(1,2,1,2));
