let mutable_array = ['This', 'Little', 'Piggy'];
let readonly_array = ['This', 'Little', 'Piggy'];

/* declares readonly_array as readonly type - don't change this */
Object.defineProperty(readonly_array, 'length' , { writable: false });

/* ----------------------------------------------------------------------------
EXERCISE: ONLY USE MUTABLE_ARRAY
Read up on the documentation of each method and complete the below exercises:
Methods: shift(), pop()
----------------------------------------------------------------------------*/ 

const mutable_last = ;
const mutable_first = ;

/* Easy! Well...check the length of the array, or print it. Mutable array should be how it was first defined. If not... */
console.log(mutable_last);
console.log(mutable_first);

console.log(mutable_array.length); 
console.log(mutable_array); 

/* ----------------------------------------------------------------------------
EXERCISE: ONLY USE MUTABLE_ARRAY
Read up on the documentation of each method and complete the below exercises:
Methods: push(), slice(). 
----------------------------------------------------------------------------*/ 

/* Let's start by returning the mutable_array back to it's form using push().
   e.g array.method() 
*/

mutable_array; // no need to assign to a different variable, using the method directly here updates the parent array. 
mutable_array;

console.log(mutable_array);

/* reorder the array so it's back to what it was first defined as 
UNCOMMENT THE PARTS BELOW TO COMPLETE */
mutable_array = [];
console.log(mutable_array);


/* Achieve the same thing - grabbing the first and last element of the array - using slice() */
const sliced_first = ;
const sliced_last = ;

console.log(sliced_first);
console.log(sliced_last);

/* ----------------------------------------------------------------------------
BONUS EXERCISE:
Use push(), shift(), and pop() on the readonly_array. What happens?
Then use slice(). What happens?
Is there a difference - Why?
Methods: push(), pop(), shift(), slice()
----------------------------------------------------------------------------*/ 

/* Your Code Here */