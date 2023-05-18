//typeof

var name = "Divya";
console.log(typeof name);

// convert number to string
// ----------Method-1-------------
var age = 21;
console.log(typeof age);
age = age + "";
console.log(typeof age);

// ----------Method-2-------------
var age = 21;
console.log(typeof age);
age = String(age);
console.log(typeof age);

// convert string into number
var myaAge = "21";
console.log(typeof myaAge);
myaAge = +myaAge;
console.log(typeof myaAge);

// ----------Method-2-------------
var myaAge = "21";
myaAge = Number(myaAge);
console.log(myaAge);
