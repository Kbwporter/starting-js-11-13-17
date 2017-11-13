// This declares the variable myVar
var myVar;

//This sets the value of the myVar variable to number 7
  myVar = 0;

// This declares the my name variable and sets it to the string
  var myName = 'Kellie';

  /* this is a block comment in JS
  its for multiple lines*/

// A double quoted string cannot contain double quotes within unless the are escaped using a '\'. Same appiles for a single quoted string
var mySentence = 'What\'s up';
var thing = "and he said \ what's up\"to me";

//Strings cannot break lines by defalut.
var myLongString = "This actually isn't too long.";

//Booleans are either true or false
var myBoolean = false;


var numA = 14;
var numB = 27;

//additon in JS is done with the plus symbol
var sumOfAandB = numA + numB;

//This reassigns the value of numA variable to 32, this does not effect the line above but will effect the line below.

numA = 32;

//subtration
var numAMinusNumB = numA - numB;

//multiplication is done throught an *
var numC = 3 * 3;

//division is done with /
var numD = 4 / 2;

//Exponents are done with **
var myExponent = 2 ** 4;

//modulous is done with a percent returning the remainder after division, 5 % 2 = 1

var myModulus = 5 % 2;

//this is concatenation, adding strings together spaces must be put in manually
var myFullName = myName + " " + "Porter";

//This creates the me variable and assigns to be an object
var me = {
  //objects are amde of named key value pairs
  name: "Kellie Porter",
  age: 24,
  isAwesome: true,
  head: {
    eyes: 2,
    hairColor: 'brown',
    brain: true
  }
};
// Properties on the me object would generally be accessed using dot notation
//me.name would return Kellie Porter, me.head.eyes would return 2
console.log(me.age);

//This sets the age property to the value of 30
me.age = 30;

console.log(me.age);

// Arrays are keys value pairs where the keys is a number, arrays are created using [], each element within an array is separated by a ,
var myArr = [55, "Tiger", true, me];

// Arrays in Javascript start with a 0 index, to access elements within an array use [] with the index number, myArr[0] would be 55, myArr[1] would be Tiger

console.log(myArr[0]);

var daysOfTheWeek = ['Sunday','Monday','Tuesday'];

// Object can hold arrays as a value for Properties
// This adds a hobbies property to the me object and set it to be an array
me.hobbies = ['Code','Music','Design','Blogging']

console.log(me.hobbies[0]);

var something;

// sommething is undefined the variable has benn declared but a value has been set, that's okay
console.log(something);

//If js encounters a variable that does not exist it will throw an error and stop excuting any futher script by defalut

/*console.log(somethingElse);*/

//null is noting
var nothing = null;

// this is a function declaration that create a function called sayHello
function sayHello() {
  console.log("Welcome to Javascript City All!");
}
// function declarations do not end in a ;
// statments within the funtion DO end in ;

// This calls or invokes the sayHello function.
sayHello();

//This works because function declarations are hoisted to the top of the document when read by the browser
sayHelloTo("meeeee");


// variables create within a function are only available within the function, this is called function scope
function sayHelloTo(name) {
  var message = "Welcome to Javascript" + name + "!";
  console.log(message);
}

//sayHelloTo("Richard Simmons");
//sayHelloTo("Paul Newman");
// sayHelloTo(myFullName);
// sayHelloTo();

// This is a function experssion that creates a function called sumNums
var sumNums = function(firstNum, secondNum) {
  var sum = firstNum + secondNum;
  // this will return the value of the sum variable to where the functions is called, once a return statement is triggered no further code within the function is executed.
  return sum;
  console.log("This is never going to happen");
};

sumNums(2,2);

// console.log (sumNums(2,2));

var mySum = sumNums(923, 13454);

var apollo = {
  isDog: true,
  breed: 'mutt',
  legs: 4,
  age: 2,
  toys: ['Mrs.Moose','Bone','Half a Giraffe'],
  // This is the speak method on the dog object, in JS methods are functions that are the property of an object
  speak: function() {
    console.log('woof woof');
  },
  sayHiTo: function(name, age) {
    console.log("Hi" + name + "woof woof! You're" + age);
  }
};
//This calls the speak method on the apollo object
apollo.speak();

//With functions that use multiple parameters the order matters, supply the parameters in the same order in which the arguments are listed where the function is defined
apollo.sayHiTo("Stella", 5);

// The console object is a global object created within the browser, log is a method on that object. 
console.log(console);
