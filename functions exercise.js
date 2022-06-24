// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.
function logGreeting(){
    console.log("Hello!");
  }
  
  // console.log(logGreeting()); not used because nothing is returned to function
  
  //calls functions
  logGreeting();
  
  // Exercise 2. Define a function called getName() that *returns* a string that is your name.
  // Remember, this function should return the string -- not print it.
  // Then print your name in the console by passing getName() into the console.log() function.
  
  function getName(string){
    return string;
  }
  
  //print name
  console.log(getName("Diana"));
  
  // Exercise 3. Call a function within a function -- Write a function called logGreeting2()
  // that prints a full sentence that contains your name: "Hello! My name is <name>."
  // logGreeting2 should call myName() to get your name.
  // Then print your greeting to the console by calling logGreeting2().
  
  //myName function
  function myName(){
    return "Diana";
  }
  
  //logGreeting passes myName
  function logGreeting2(){
  console.log("Hello! My name is " + myName() + ".");
  }
  
  //call function
  logGreeting2();
  
  // Exercise 4. Write a function that takes 3 parameters that are all numbers.
  // The function should return the sum of the 3 numbers.
  // Then write some function calls you would use to test your function.
  
  //3 num parameters
  function sumOf3(num1, num2, num3){
  
    //create var for total
    let getTotalOf3;
    //check typeof is number
    if(typeof num1 == "number" && typeof num2== "number" && typeof num3== "number" ){
      //returns total
      getTotalOf3 =num1 + num2 + num3;
      return getTotalOf3;
    }else{
      return false;
    }
  }
  
  //test cases
  console.log(sumOf3(1,2,3));
  console.log(sumOf3(1,true,3));
  console.log(sumOf3(1,"",3));
  
  // Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
  // Write a function that takes in a person's age and returns true if they should get a discount.
  // Otherwise it should return false.
  // Then write some function calls you would use to test your function.
  
  function getDiscount(age){
    //check if age is a number
     if(typeof age !== "number"){
       return false;
     }
       //check if age will receive discount
    else if((age >= 0 && age <=14) || (age >= 65)){
      return true;
    }else{
      return false;
    }
  }
  
  //test cases
  console.log(getDiscount(2)); //true
  console.log(getDiscount(-2)); //false
  console.log(getDiscount(66));//true 
  console.log(getDiscount(""));//false
  
  // Exercise 6. Write a function that takes 2 parameters -- one number and one string.
  // The function should print the string the given number of times.
  // Then write some function calls you would use to test your function.
  function numString(number1, string1){
  if(typeof number1 !== "number" || typeof string1 !== "string"){
    console.log("Input a valid number and string");
    return false;
  }
  for(let i=0; i < number1; i++ ){
  //prints string
  console.log(string1);
  }
  }
  
  //test cases
  numString(3,"hello"); //hello hello hello
  numString(3,true); 
  numString(3,6);
  numString("3","hello");
  
  // Exercise 7. Read the following code (don't run it yet)
  function mysteryFunction1(p1) {
    return p1 * 2;
  }
  const y = 4;
  const z = mysteryFunction1(y);
  console.log("The value of y is " + y);
  console.log("The value of z is " + z);
  
  // Without running the code, write down in a comment:
  // 1. What mysteryFunction1 does
  //created a function that takes one parameter and returns the parameter times 2
  
  // 2. What prints out for the value of y
  //4
  
  // 3. What prints out for the value of z
  //8
  
  // Now run the code and see if you're correct.
  // Were you correct? If not, what did you learn?
  //Yes, I was correct
  
  // Exercise 8. Read the following code (don't run it yet)
  function mysteryFunction2(p1, p2) {
    const x = p1 - p2;
    return x;
  }
  const a = mysteryFunction2(10, 4);
  const b = mysteryFunction2(a, 1);
  console.log("The value of a is " + a);
  console.log("The value of b is " + b);
  
  // Without running the code, write down in a comment:
  // 1. What mysteryFunction2 does
  //Ceates a function that takes two parameters and returns the var x which is the difference between the two parameters.
  
  // 2. What prints out for the value of a
  //6
  // 3. What prints out for the value of b
  //5
  // Now run the code and see if you're correct.
  // Were you correct? If not, what did you learn?
  //Yes, I was correct
  
  // Exercise 9. This exercise is to practice reading the documentation for functions.
  // String.split() is a function in the JavaScript standard library that you can use in your code.
  // Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  // Try to use it to solve the following challenges:
  
  // Here's a string I made representing my grocery list.
  // Using split() and groceryList, make an array of my grocery list items
  const groceryList = "eggs,carrots,orange juice";
  const groceryArray= groceryList.split(",");
  
  console.log(groceryArray);
  
  // Here's a string I made representing my morning schedule.
  // Using split() and mySchedule, make an array of the *first 2* things I do in the morning
  // There are multiple ways to do this, but try doing it using only the split() function.
  const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
  const scheduleArray=mySchedule.split('--->',2);
  console.log(scheduleArray);
  // Congrats, you made it to the end!
  // Did you find this easy or hard? If you used references, which ones helped you?
  // Please answer in a comment below.
  //For the most part it was pretty easy. However I referred to mdn web docs for the last problem to recognize the separator.
  
  // Email your file to the course staff,
  // or commit your file to GitHub and email us a link.