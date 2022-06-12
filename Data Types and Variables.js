// Week 1 - Variables

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Data Types and Variables

// Exercise 1. Simply declare a variable named 'emptyVariable'
let emptyVariable;
// Exercise 2. Declare a variable called 'myName'
let myName;
// Exercise 3. Assign your name as the value for 'myName'
myName="Diana";
// Exercise 4. Declare a variable called dreamDestination and give it the value
// of what your dream vacation destination is.
let dreamDestination = "Japan"
// Exercise 5. Make the following variables and assignments
// - a variable called num1 with a value greater than 1 and less than 10
// - a variable called num2 with a value of greater than or equal to 1 and less
// than or equal to 10
let num1= 3
let num2 = 1
// Exercise 6. Write a comment below explaining the difference between the rules
// for num1 and num2 from Exercise 5. What numbers would be valid values for
// num2 but not num1?
//The difference is that num1 cannot include the values of 1 & 10 meanwhile num2 does include 1 & 10 due to the use of >= & <=.

// Exercise 7. Now we will try some addition.
// a. Assign the the values of 4 and 6 to num1 and num2, respectively.
// b. Make a new variable called 'theSum', and use 'num1' and
// 'num2' to assign its value using the "+" operator.
num1=4;
num2=6
let theSum= num1 + num2;

console.log(theSum);
// Exercise 8. Now we will try some multiplication.
// Make a new variable called 'theProduct', multiply num1 and num2 and assign
// the resulting value to 'theProduct'.
let theProduct = num1 * num2;

console.log(theProduct);
// Exercise 9.
// Make a new variable called 'statement' and using 'myName' and
// 'dreamDestination' and the concatenation method of your choice, make the
// value of statement to be:
// "Hi, my name is <your name>, and I can't wait to visit <your destination>!"
let theStatement= "Hi, my name is " + myName + ", and I can't wait to visit " + dreamDestination;

console.log(theStatement);

// *NOTE* For the following exercises, put your answers in the line below
// the description of each exercise. For example, below a prompt, you may see:
// let myAnswerForExercise10= "";
// If your answer is "foo", then fill in the line to be:
// let myAnswerForExercise10 = "foo";

// Exercise 10. What is the data type of the value stored in 'dreamDestination',
// place your answer in the quotes below:

const myAnswerForExercise10 = "string";
console.log(typeof dreamDestination);
// Exercise 11. What is the data type of the value stored in 'product',
// place your answer in the quotes below:

const myAnswerForExercise11 = "number";
console.log(typeof theProduct);
// Exercise 12. What do you think the value of emptyVariable is?
// Place your answer below:

const myAnswerForExercise12 = "undefined";
console.log(typeof emptyVariable);
// Exercise 13. If
const A = "R";
const B = 1;
const C = 4;
const D = "D";

// What is the value of B + C
const myAnswerForExercise13 = "5";
let sumMyAnswerForExercise13= B + C;
console.log(sumMyAnswerForExercise13);

// Exercise 14 What is the value of
// A + "n" + D
const myAnswerForExercise14 = "RnD";
let sumMyAnswerForExercise14= A + "n" + D;
console.log(sumMyAnswerForExercise14);

// Exercise 15 What is the value of
// A + B * 2 + D + C / 2:
const myAnswerForExercise15 = "R2D2";
let sumMyAnswerForExercise15= A + B * 2 + D + C / 2;
console.log(sumMyAnswerForExercise15);
// Exercise 16 What is the value of A * B
const myAnswerForExercise16 = "NaN";
let sumMyAnswerForExercise16= A * B;
console.log(sumMyAnswerForExercise16);
// Exercise 17 What is the value of true || false
const myAnswerForExercise17 = "";
console.log(typeof true);//boolean
console.log(typeof false);//boolean
console.log(true === true);// true
console.log(true == true);// true
console.log(false === false);//true
console.log(false == false);//true
console.log(true==false);//false
console.log(true===false);//false
console.log(myAnswerForExercise17);

//Exercise 18 What is the value of 1 === "1"
const myAnswerForExercise18 = "false";
console.log(1==="1");
console.log(myAnswerForExercise18);
// Exercise 19 What is the value of 1 == "1"
const myAnswerForExercise19 = "true";
console.log(1 == "1");
console.log(myAnswerForExercise19);
// Exercise 20 What is the value of 1 < 1
const myAnswerForExercise20 = "false";
console.log(1 < 1);
console.log(myAnswerForExercise20);
// Exercise 21 What is the value of 1 < 2 < 3
const myAnswerForExercise21 = "true";
console.log(1 < 2 < 3);
console.log(myAnswerForExercise21);
// Exercise 22 What is the value of 2 < 1 < 3
const myAnswerForExercise22 = "true";
console.log(12 < 1 < 3);
console.log(myAnswerForExercise22);
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

//Overall, I got through this very easily.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.