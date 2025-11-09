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


//STRING CONCATENATION

alert("test" + "string"); //Returns "teststring"

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"

alert('1' + 2 + 2); // "122" and not "14"
// If the first operator is a string, the following operaotors are treated as strings too.