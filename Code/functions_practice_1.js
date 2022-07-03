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

function reverseString (...) {
    ...
    return reversedValue
};

console.log(reverseString(value));

/* EXERCISE 3: Fibonacci Sequence.
Using a for loop, output the fibonacci sequence for the first 10 terms in the fibonacci sequence. */


/* Now write the same fibonacci sequence using a while loop */



/* EXERCISE 4 (taken from Github):
Create a program that lists every 3rd number between 1-20 and prints it to the console.
Feel free to answer using a function, for loop, or while loop. */


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
...
console.log(studentsWhoPass);

/* Rewrite the above solution as a ternary expression */ 


/* EXERCISE 6: Math!
Write function that finds the distance between two Cartesian points */

/* Write above function in fat arrow notation */

