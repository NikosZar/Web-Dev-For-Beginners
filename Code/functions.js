// // Practice with functions
// const greetingMessage = createGreetingMessage('Christopher');

// function displayGreeting(name, salutation='Hello') {
//   console.log(`${salutation}, ${name}`);
// };

// function createGreetingMessage(name) {
//     const message = `Hello, ${name}`;
//     return message;
//   };

// // Sets a timer and executes the function until the timer runs out.
//   function displayDone() {
//     console.log('3 seconds has elapsed');
//   }
//   // timer value is in milliseconds
//   setTimeout(displayDone, 3000);

// // This is the same thing and more efficient - we know the above function will be called only once so this is why we don't need a bunch of functions that will be called only once. 
// setTimeout(function() {
//     console.log('3 seconds has elapsed');
//   }, 3000);

// // fat arrow function, is a type of anonymous function and skips the need to use the word 'function' and instead uses a fat arrow. Most modern programmers use this but it's the exact same thing as above.
// setTimeout(() => {
//     console.log('3 seconds has elapsed');
//   }, 3000);


// // Traditional Anonymous Function
// function (a){
//     return a + 100;
//   }
  
//   // Arrow Function Break Down
  
//   // 1. Remove the word "function" and place arrow between the argument and opening body bracket
//   (a) => {
//     return a + 100;
//   }
  
//   // 2. Remove the body braces and word "return" -- the return is implied.
//   (a) => a + 100;
  
//   // 3. Remove the argument parentheses
//   a => a + 100;


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
//foreach() calls a function for each element in an array