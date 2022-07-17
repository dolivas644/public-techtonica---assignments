//Create an empty object user.
let user = {};
//Add the property name with the value John.
user.name ="John";
//Add the property surname with the value Smith.
user.surname = "Smith";
//Change the value of the name to Pete.
user.name= "Pete";
//Remove the property name from the object.
delete user.name;

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj){
  for (let key in obj) {
    return false;
  }
  return true;
}

//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum=0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); // 390

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}