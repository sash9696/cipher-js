// console.log("Hi there");
//it just prints out hi there
/*this is a 
multiline comment*/
//this is a
//multiple comment

// var a;
// a = 10;
// var b = "John";

//8 basic data types in javascript

// const message = "hello";
// message = 12345;

// console.log(message);

//1 Number

// let n = 123;
// n = 12.345;
// console.log(n);

//specific numeric numbers
//Infinity
// alert(1 / 0);
// console.log(1 / 0);
// console.log(Infinity);

//NaN

// console.log(NaN + 1);
// console.log(NaN * 3);
// console.log("not a number" / 2 - 1);

// console.log(NaN * 0);
// console.log(NaN ** 0);  //exception

// //2 BigInt
// const bigInt = 9007199254740991n;

// console.log(bigInt);

//3 String
//simple quotes
// let str = "Hello";
// let str2 = "Single Quotes";

// //extended functionality embeds a value ${}
// let str3 = `${str} , how are you doing`;

// console.log(str3);

// console.log(`the result is ${1 + 2}`);
// console.log("the substraction is ${2 - 1}");

//4 Boolean (logical type)

// let isChecked = false;

// let isGreater = 4 > 1;
// console.log(isGreater);

//5 Null
// let age = null;
// console.log(age);
//its just a special value which represents nothing, empty or a value unknown

//6 undefined
//it means value is not defined

//7 Object and Symbols nom-primitive
//used for more complex data structures

//Type Coversions

// alert(8);

//String Conversion

// let value = true;
// value = String(value);
// console.log(typeof value);

//Numeric Conversion

// alert("6" / "2");

// let str = "123";

// let num = Number(str);

// console.log(typeof num);

// let age = Number("A string instead of a number");
// console.log(age);

// console.log(Number("    123     "));

// console.log(Number(true));
// console.log(Number("123a"));

// console.log(Number(undefined));

// console.log(Number(null));

//Comparisons

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log("Z" > "A");
// console.log("a" > "A");
//unicode

// console.log("2" > 1);
// console.log("01" === 1);

// console.log(0 == false);
// console.log("" == false);
// console.log(0 === false);
// console.log("" === false);
// console.log("1" !== 1);

// console.log(null === undefined);

//conditional statement
//conditonal ?

// if (condition) {
// } else {
// }

// let result = condition ? value1 : value2;

// let accessAllowed;

// let age = prompt("How old are you?", "");

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// let age = prompt("How old are you?", "");

// let accessAllowed = age > 18 ? true : false;

// alert(accessAllowed);

// let age = prompt("age", 18);

// let message =
//   age < 3
//     ? "baby"
//     : age < 18
//     ? "student"
//     : age < 100
//     ? "adult"
//     : "what an unusual age";

// alert(message);

//Logical Operators

// || OR

// if (true || false) {
//   console.log("truthy");
// }

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   console.log("The office is Closed");
// }

//short circuit

// true || console.log("not printed");

//&& AND

// result = a && b

// console.log(true && false);

// let hour = 12;
// let minute = 20;

// if (hour == 12 && minute == 30) {
//   console.log("the time is 12:30");
// }

// ! NOT

// console.log(!true);

//Functions

//Function Declaration

// const userName = "John";

// function showMessage(msg) {
//   const userName = "Bob";
//   //   console.log(msg + " " + userName);
//   console.log(`${msg} ${userName}`);
// }

// showMessage("Hi");

// function sum(a, b) {
//   //   console.log(a + b);
//   if (false) {
//     return a + b;
//   } else {
//     return
//      a - b;
//   }
// }
// console.log(sum(1, 2));

//Function expression Named or Unnamed

//unnamed

// let sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(4, 3));

//named function expression
// let sum1 = function sum(a, b) {
//   return a + b;
// };

// console.log(sum1(4, 3));

//anonymous function
// function (){

// }
