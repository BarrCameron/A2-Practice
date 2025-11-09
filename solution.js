// "use strict";
// alert("test");

// let message; // let message = "hello"; - This is more concise

// message = "hello, I am a message";

// message = "Changing the variable";
// alert(message);

// let user = "John";
// let age = 25;           //when declaring multiple varibles, do it this way for readability

// let hello = "Hello = message2";

// let message2;

// // copy 'Hello world' from hello into message
// message2 = hello;

// // now two variables hold the same data
// alert(hello); // Hello world!
// alert(message2); // Hello world!

// const myBirthday = '06.04.2004';    // Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error


// // VARIABLES section: Tasks 

// let Name = "John";
// let admin = Name;

// alert(admin);

// let OurPlanet = "Earth";
// let CurrentUser = "John";
// alert(OurPlanet + " " + CurrentUser);

// //DATA TYPES 

// alert( 1 / 0 );     // Infinity
// alert(3**2);        //** = to the power of
// alert(5 / 0);

// let embedded = "variable";
// alert(`Hello, I am a ${embedded}`);     // Allows to embed variables in quotes

// alert(4 > 1); // returns "true" - boolean variable

// //TYPEOF
// let tester = "I am a string";
// alert(typeof tester);               // Returns "string"
// alert(typeof 20678490n);            // Returns "bigint"

// //ALERT, PROMPT, CONFIRM


// //PROMPT
// prompt("Where are you from?", "China");     // First one shows the question, second one is an optional text in the answering block

// let prompty = prompt("Tell us your name", "")   // Assigns the answer to a variable and then we can use that answer
// alert(`Welcome ${prompty}!`);

// //CONFIRM
// let nose = confirm("do you have a large Nose?")
// alert(`The claim that the user has a large nose is ${nose}!`)


// //TYPE CONVERSIONS

// //STRING CONVERSION

// let StrCon = false;
// alert(typeof StrCon);       //Tells us it's boolean

// StrCon = String(StrCon);    //Changes the type from boolean to string
// alert(typeof StrCon);       //Tells us it's now a String

// //NUMERIC CONVERSION

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number

// alert("15" / "5"); //This returns 3, interesting to note that even when the numbers are in string format, we still can divide them.
// alert("Silly" / "ME");      // Returns NaN, obviously can't divide strings

// alert(Number(true));        //Returns "1" for true
// alert(Number(false));       //Returns "0 for false - "Number" has to start in CAPS

// //BOOLEAN CONVERSION

// alert(Boolean(1));                      // Returns True
// alert(Boolean(0));                      // Returns False

// alert(Boolean(""));                     //Returns False
// alert(Boolean("This will be true"));    //Returns True

// //Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN,
// //become false. Other values become true.


// //BASIC OPERATORS, MATHS

// //REMAINDER OPERATOR
// alert( 8 % 3); // Returns 2 - That's the remainder of 8/3
// alert( 13 % 6 ); //Returns 1

// //EXPONENTATION
// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16

// alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a SQUARE ROOT)
// alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a CUBIC ROOT)


// //STRING CONCATENATION

// alert("test" + "string"); //Returns "teststring"

// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"

// alert(2 + 2 + '1' ); // "41" and not "221"

// alert('1' + 2 + 2); // "122" and not "14"
// // If the first operator is a string, the following operaotors are treated as strings too.


// //Using + with unary operands
// // Converts non-numbers
// alert( +true ); // 1
// alert( +"" );   // 0

// let apples = "2";
// let oranges = "3";

// alert(apples + oranges); // This will return "23" because the 2 and the 3 are seen as strings
// // both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// //ICREMENT AND DECREMENT
// let counter = 2;
// counter++;
// alert(counter); //3

// counter--;
// alert(counter); //back to 2
// // Can only be used on variables, not numbers (can't do 5++)

// //COMPARISONS
// // All comparison operators return a boolean value. 

// alert( 2 > 1 );  // true (correct)
// alert( 2 == 1 ); // false (wrong)  -  "==" means does a = b
// alert( 2 != 1 ); // true (correct) -  "!=" means does a not equal b 

// //A comparison result can be assigned to a variable, just like any value:
// let result = 5 > 4; // assign the result of the comparison
// alert( result ); // true

// //Comparing different types
// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1

//STRICT EQUALITY OPERATOR
// Checks the equality without type conversion
// If a and b are of different types, "===" immediatley returns false

// alert( 0 === false ); // false, because the types are different
// alert("0" === 0);     // Returns false


//CONDITIONAL BRANCHING, IF

// let year = prompt("When was I born?", "")

// if ( year == 2004){
//     alert("well done dummy!")
//     alert("wasn't a hard question")
// } else {
//     alert("wowwwww, what a ggreat friend")
//     alert("you're done")
// }

// //Multiple nested if statments with "?"
// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// //Multiple nested if statements normally
// if (age < 3) {
//   message = 'Hi, baby!';
// } else if (age < 18) {
//   message = 'Hello!';
// } else if (age < 100) {
//   message = 'Greetings!';
// } else {
//   message = 'What an unusual age!';
// }

//TASKS
// let answer = prompt("What is the official name of JavaScript?", "");

// if (answer == "ECMAScript"){
//     alert("You're Right!")
// } else {
//     alert("You don't know? It's ECMAScript!")
// }

// let number = prompt("Give me any number", "")

// if (number > 0){
//     alert(1);
// }else if (number < 0) {
//     alert(-1);
// }else{
//     alert(0);
// }

// let result;

// result = (a + b < 4) ? "Below" : "Over";


// let message;

// message = (login == 'Employee') ? "Hello!":
//           (login == "Director") ? "Greetings":
//           (login == "") ? "No Login":
//           "";



//LOGICAL OPERATORS
//OR operator (||)
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend == true) {
  alert( 'The office is closed.' ); // it is the weekend
}

//AND operator (&&)
let hour2 = 12;
let minute = 30;

if (hour2 == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}