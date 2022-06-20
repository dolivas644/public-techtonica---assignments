// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let wholeNumbers=1;
while (wholeNumbers<=5){
  console.log(wholeNumbers);
  wholeNumbers++;
}
console.log(wholeNumbers);


// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let wholeNumbers2=1;
do{
  console.log(wholeNumbers2);
  wholeNumbers2++;
}while(wholeNumbers2 <= 5);

console.log(wholeNumbers2);
// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i;
for(i =1; i<=5; i++){
 console.log(i);
}
console.log(i);

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//while loop format
let countDown=10;
while (countDown>=1){
  console.log(countDown);
  countDown--;
}
console.log(countDown);

//do while format
let countDown2=10;
do{
  console.log(countDown2);
  countDown2--;
}while(countDown2 >= 1);

console.log(countDown2);

//for loop format
let countDown3;
for(countDown3 =10; countDown3>=1; countDown3--){
 console.log(countDown3);
}

console.log(countDown3);


// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//while loop
let count7To27=7;
while (count7To27<=27){
  console.log(count7To27);
  count7To27++;
}

 console.log(count7To27);

//do while
let count7To27Two = 7;
do{
    console.log(count7To27Two);
  count7To27Two++;
}while(count7To27Two <= 27);

console.log(count7To27Two);

//for loop
let count7To27Three = 7;

for (count7To27Three=7; count7To27Three<=27; count7To27Three++){
   console.log(count7To27Three);
}

console.log(count7To27Three);

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//while loop
let printIntervalsOf10 =10;
while( printIntervalsOf10 <=100 ){
    console.log(printIntervalsOf10);
  printIntervalsOf10+=10;
}

console.log(printIntervalsOf10);

//do while
let printIntervalsOf10Two = 10;
do{
    console.log(printIntervalsOf10Two);
  printIntervalsOf10Two+=10;
}while(printIntervalsOf10Two <= 100);

console.log(printIntervalsOf10Two);

//for loop
let printIntervalsOf10Three = 0;

for(printIntervalsOf10Three=10; i<=100; i+= 10){
  console.log(printIntervalsOf10Three);
}
console.log(printIntervalsOf10Three);

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
/*
let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour--;
}
*/
//This wil be an infiinite loop due to the starting value being at 1 and condition says it to be true as long as counterFour is less than 2. However, due to it decrementing instead of incrementing the value will always be true so there will be no break in the loop.

let counterFour = 1;
while (counterFour >=-100) {
  console.log("HELP ME!");
  counterFour--;
}

console.log(counterFour);

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let myFavInt;

for(myFavInt=0; myFavInt <= 64; myFavInt++){
  console.log(myFavInt);
}
console.log(myFavInt);

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
let myFavInteger = 22;
for(let i=0; i <= 100; i++){
if(i != myFavInteger){
  console.log(i + " not my favorite number");
}else{
  console.log(i + " my favorite number!");
}
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//I will use a while loop if I want to loop through a block of code as long as a condition is true.
//I will use a for loop when I want to iterate through a block of code a number of times.
  //I will use a do while loop if I want to loop through a block of code to run at least one time before the condition is met. 

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/
/*
for (let outsideCounter = 0; outsideCounter <= 3 /*???*/ //; ) {
//  console.log("counting down from", outsideCounter);
 // for (let insideCounter = outsideCounter /*???*/ /*???*/; ; ) {
 //   console.log("inside" /*???*/);
 // }
  //console.log("***********************************");
//}

  for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++ ) {
 console.log("counting down from", outsideCounter);
 for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
    console.log("inside", insideCounter);
 }
 console.log("***********************************");
}