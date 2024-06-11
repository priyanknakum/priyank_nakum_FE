# Q-1

## What is JavaScript. How to use it?

### Ans:

- JavaScript is a type of programming language primarily used for web development.
- It is one of the core technologies of the World Wide Web, along with HTML and CSS.
- JavaScript enables developers to add interactivity, dynamic content, and behavior to websites.

#### Embedding JavaScript in HTML

- JavaScript code can be included directly within HTML files using `<script>` tags. For example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Example</title>
  </head>
  <body>
    <h1 id="demo">Hello, World!</h1>

    <script>
      // JavaScript code goes here
      document.getElementById("demo").innerHTML = "Hello, JavaScript!";
    </script>
  </body>
</html>
```

<hr>

# Q-2

## How many type of Variable in JavaScript?

### Ans:

JavaScript has three main types of variables:

1. **var**: Variables declared with `var` can be reassigned and re-declared within the same scope. However, `var` variables have function-level scope, meaning they are visible within the function in which they are declared, but not outside of it.

2. **let**: `let` allows for block-scoped variables. Variables declared with `let` are only accessible within the block in which they are declared, providing better control over variable scope compared to `var`. `let` variables can be reassigned but not re-declared within the same scope.

3. **const**: `const` is used to declare variables whose value cannot be changed once assigned. It also has block-level scope like `let`. Variables declared with `const` must be initialized at the time of declaration, and attempting to reassign them will result in an error.

- Here's an example demonstrating the use of these variable types:

```javascript
// Using var
var x = 10;
console.log(x); // Output: 10
x = 20;
console.log(x); // Output: 20

// Using let
let y = 30;
console.log(y); // Output: 30
y = 40;
console.log(y); // Output: 40

// Using const
const z = 50;
console.log(z); // Output: 50
z = 60; // This will throw an error
```

<hr>

# Q-3

## Define a Data Types in js?

### Ans:

- In javascript variables can hold values of any data type without explicitly defining the type. There are **seven** primary data types in JavaScript:

1. **Primitive Data Types:**

   - **Number:** Represents numeric values, both integers and floating-point numbers.
   - **String:** Represents sequences of characters, enclosed within single or double quotes.
   - **Boolean:** Represents a logical value, either `true` or `false`.
   - **Undefined:** Represents a variable that has been declared but not assigned a value.
   - **Null:** Represents the intentional absence of any value.

2. **Non-primitive Data Types:**

   - **Object:** Represents a collection of key-value pairs. Objects can be created using curly braces `{}` or the `new Object()` syntax.
   - **Array:** Represents a list-like collection of elements. Arrays can hold values of any data type and are created using square brackets `[]`.
   <hr>

   # Q-4

   ## Write a mul Function Which will Work Properly When invoked With Following Syntax.

   ### Ans:

- Here is the javascript code to Write a mul Function Which will Work Properly When invoked With Following Syntax.

```javascript
function mul(a) {
  const innerMul = (b) => {
    if (b === undefined) return a;
    return mul(a * b);
  };
  innerMul.valueOf = () => a;
  return innerMul;
}
```

   <hr>

# Q-5

## What the deference between undefined and undeclare in JavaScript?

### Ans:

- Here's the difference between `undefined` and `undeclare`.

1. **Undefined:**

   - `Undefined` represents the absence of a value in JavaScript. It is a primitive data type.
   - A variable is said to be `undefined` when it has been declared but has not been assigned a value.
   - For example:
     ```javascript
     let x;
     console.log(x); // Output: undefined
     ```
   - In the above example, the variable `x` has been declared using the `let` keyword but has not been assigned any value, so it is `undefined`.

2. **Undeclared:**

   - `Undeclared` refers to a variable that has not been declared within the current scope.
   - Accessing an undeclared variable in JavaScript will result in a reference error.
   - For example:
     ```javascript
     console.log(y); // Output(Error): y is not defined
     ```
   - In the above example, `y` is an undeclared variable, meaning it has not been declared within the current scope. Accessing it directly results in a error.
   <hr>

   # Q-6

   ## Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. Using console.log() print out the following quote by Mother Teresa:

   ### Ans:

- Here's the practical.....
  ```Javascript
  console.log("There is no exercise better for the heart than reaching down and lifting people up.")
  ```
  <hr>

# Q-7

## Check if typeof '10' is exactly equal to 10. If not make it exactly equal?

### Ans:

The `typeof` method is used to determine the type of a value. It returns a string indicating the type of the operand. However, it's important to note that comparing the result of `typeof` with another value using strict equality (`===`) can often lead to unexpected results due to type coercion.

Let's address the scenario where we want to check if the type of the string `'10'` is exactly equal to the number `10`.

```javascript
// Check if typeof '10' is exactly equal to 10
if (typeof "10" !== "number") {
  // If not, convert '10' to a number
  let num = parseInt("10");
  console.log(num); // Output: 10
}
```

<hr>

# Q-8

## Write a JavaScript Program to find the area of a triangle?

### Ans:

- Here's a JavaScript program that calculates the area of a triangle:

```javascript
let base = x;
let height = y;
function Area(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(Area(base, height));
```

<hr>

# Q-9

## Write a JavaScript program to calculate days left until next Christmas?

### Ans:

- Here's a JavaScript program that calculates the number of days left until the next Christmas:

```javascript
function daysUntilNextChristmas() {
  // Get today's date
  let today = new Date();

  // Get the current year
  let currentYear = today.getFullYear();

  // Create a new Date object for Christmas of the current year
  let christmas = new Date(currentYear, 11, 25); // Month is zero-based (11 is December)

  // If Christmas has already passed this year, calculate for next year
  if (today > christmas) {
    christmas.setFullYear(currentYear + 1);
  }

  // Calculate the difference in milliseconds between today and Christmas
  let timeDiff = christmas.getTime() - today.getTime();

  // Convert milliseconds to days
  let daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return daysLeft;
}

// Call the function to get the days left until next Christmas
let daysLeft = daysUntilNextChristmas();

// Output the result
console.log("Days left until next Christmas: " + daysLeft);
```

<hr>

# Q-10

## What is Condition Statement?

### Ans:

- Condition statements in JavaScript are constructs that allow you to execute different blocks of code based on whether a specified condition evaluates to true or false. They are fundamental for controlling the flow of execution in your code and making decisions.

1. `if` Statement

- The if statement is used to execute a block of code if a specified condition is true. It has the following syntax:

```javascript
if (condition) {
  // Code to be executed if the condition is true
}
```

- Example:

```javascript
let x = 10;

if (x > 5) {
  console.log("x is greater than 5");
}
```

2. `if...else` Statement
   The `if...else` statement is used to execute one block of code if the condition is true and another block of code if the condition is false. It has the following syntax:

```javascript
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}
```

- Example:

```javascript
let x = 2;

if (x % 2 === 0) {
  console.log("x is even");
} else {
  console.log("x is odd");
}
```

- `if...else if...else` Statement
- The `if...else if...else` statement allows you to execute one of several blocks of code based on multiple conditions. It has the following syntax:

```javascript
if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition2 is true
} else {
  // Code to be executed if no conditions are true
}
```

- Example:

```javascript
let x = 10;

if (x > 10) {
  console.log("x is greater than 10");
} else if (x < 10) {
  console.log("x is less than 10");
} else {
  console.log("x is equal to 10");
}
```

<hr>

# Q-11

## Find circumference of Rectangle formula : C = 4 \* a ?

### Ans:

- To find the circumference of a rectangle in JavaScript using the formula C = 4 \* a (where 'a' represents the length of one side), here's the answer

```javascript
// Define the length of one side of the rectangle
const a = "length";

// Calculate the circumference using the formula C = 4 * a
const circumference = 4 * a;

// Output
console.log("Circumference of the rectangle:", circumference);
```

<hr>

# Q-12

## WAP to convert years into days and days into years?

### Ans:

- here's the programme to convert years into days and days into years :

```javascript
// Function to convert years into days
function yearsToDays(years) {
  const daysInYear = 365;
  return years * daysInYear;
}

// Function to convert days into years
function daysToYears(days) {
  const daysInYear = 365;
  return days / daysInYear;
}

// Example for years to days
const years = 5;
const days = yearsToDays(years);
console.log(`${years}  years is equal to ${days} days.`);

//Example for days to years
const daysInput = 1825;
const yearsOutput = daysToYears(daysInput);
console.log(`${daysInput} days is equal to ${yearsOutput} years.`);
```

<hr>

# Q-13

## Convert temperature Fahrenheit to Celsius?

### Ans:

- Here's the program to convert temperature Fahrenheit to Celsius:

```javascript
// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  // Formula to convert Fahrenheit to Celsius
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
```

<hr>

# Q-14

## Write a JavaScript exercise to get the extension of a filename.?

### Ans:

- Here's the exercise to get the extension of filename:

```javascript
function extension(fileName) {
  return fileName.split(".").pop();
}
let file1 = "practice.js";
let result = extension(file1);
console.log(result);
```

<hr>

# Q-15

## What is the result of the expression (5 > 3 && 2 < 4)?

### Ans:

- The result of the expression `(5 > 3 && 2 < 4)` should be `boolean` value `true`.
- because there are two conditions in the expression and also used `&&` logical operator which tells that both conditions should be true and In our case both conditions are true.

<hr>

# Q-16

## What is the result of the expression (true && 1 && "hello")?

### Ans:

- The result of the expression `(true && 1 && "hello")` should be `hello`.
- In JavaScript, the && operator (logical AND) is used to evaluate expressions from left to right and returns the first falsy value it encounters. If all values are truthy, it returns the last value.

- Evaluate true && 1:

  - true is a boolean value and it is true.
  - 1 is a number and it is also true.
  - Since both values are truthy, the expression evaluates - to the second value, which is 1.

- Evaluate 1 && `hello`:
  - From the previous step, we now have 1.
  - 1 is true.
  - `hello` is a string and it is also true.
  - Since both values are true, the expression evaluates to the second value, which is `hello`.
  <hr>

# Q-17

## What is the result of the expression true && false || false && true?

1. Evaluate `true && false`:

- `true && false` evaluates to `false` because both operands must be `true` for the result to be `true`.

2. Evaluate `false && true`:

- `false && true` evaluates to `false` because both operands must be `true` for the result to be `true`.

3. Evaluate `false || false`:

- `false || false` evaluates to `false` because at least one of the operands must be `true` for the result to be `true`.

- Therefore, the result of the expression `true && false || false && true` is `false`.

### Ans:

<hr>

# Q-18

## What is a Loop and Switch Case in JavaScript define that ?

### Ans:

1. **Loops in javascript**

- loop in JavaScript are control structure that repeatedly executes a block of code as long as a given condition is true. Loops are useful for performing repetitive tasks.
- here are the examples of loops:

  1.  **For Loop:** This loop is used when we know how many times we want to execute a statement or a block of statements.

      ```javascript
      for (let i = 0; i < 5; i++) {
        console.log(i);
      }
      ```

  2.  **While Loop:** This loop executes a block of code as long as the specified condition is true.

      ```javascript
      let i = 0;
      while (i < 5) {
        console.log(i);
        i++;
      }
      ```

  3.  **Do-while Loop:** This loop is similar to the while loop, but it executes the block of code once before checking the condition.

  ```javascript
  let i = 0;

  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

2. **Switch Case:**

- switch case is a control structure used for handling multiple conditions based on the value of an expression. It's often used as an alternative to multiple if...else statements.
- Here is the example of the switch case:

  ```javascript
  let day = 3;
  let dayName;

  switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid day";
  }

  console.log(dayName);
  ```

  - The `switch` keyword is followed by an expression in parentheses.
  - Each `case` keyword is followed by a value to compare against the switch expression.
  - The `break` keyword exits the switch statement, preventing the execution of subsequent cases.
  - The `default` keyword specifies the code to run if no case matches the expression.

<hr>

# Q-19

## What is the use of is Nan function?

### Ans:

- The isNaN function in JavaScript is used to determine whether a value is NaN (Not-a-Number). It checks if the given value is an illegal number

```javascript
console.log(isNaN(123));
console.log(isNaN("123"));
console.log(isNaN("abc"));
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN(null));
console.log(isNaN(true));
```

<hr>

# Q-20

## What is the difference between && and || in JavaScript?

### Ans:

- In JavaScript, `&&` and `||` are logical operators used to perform logical operations on boolean values. They are known as the logical AND and logical OR operators.

  1. **`&&` logical operator:** The logical AND operator `&&` evaluates to true when both of its operands are true. Otherwise, it evaluates to false.

  - Table of `&&` logical operator:
   <table border="1" >
    <tr>
      <th>Operand 1</th>
      <th>Operand 2</th>
      <th>result</th>
    </tr>
    <tr>
      <th>true</th>
      <th>true</th>
      <th>true</th>
    </tr>
    <tr>
      <th>true</th>
      <th>false</th>
      <th>false</th>
    </tr>
    <tr>
      <th>false</th>
      <th>true</th>
      <th>false</th>
    </tr>
    <tr>
      <th>false</th>
      <th>false</th>
      <th>false</th>
    </tr>
  </table>

  2. **`||` logical operator:** The logical OR operator `||` evaluates to true when one condition is true. If both conditions are false, it evaluates to false.

  - Table of `||` logical operator:
   <table border="1" >
    <tr>
      <th>Operand 1</th>
      <th>Operand 2</th>
      <th>result</th>
    </tr>
    <tr>
      <th>true</th>
      <th>true</th>
      <th>true</th>
    </tr>
    <tr>
      <th>true</th>
      <th>false</th>
      <th>true</th>
    </tr>
    <tr>
      <th>false</th>
      <th>true</th>
      <th>true</th>
    </tr>
    <tr>
      <th>false</th>
      <th>false</th>
      <th>false</th>
    </tr>
  </table>

<hr>

# Q-21

## What is the use of Void (0)?

### Ans:

- In JavaScript, void(0) is a commonly used expression to evaluate to undefined.
- This expression is particularly useful in specific scenarios where we want to perform an operation that should result in no value (i.e., undefined) or when we need to prevent the default behavior of certain HTML elements, like links.

<hr>

# Q-22

## Check Number Is Positive or Negative in JavaScript?

### Ans:

- Here is the javascript code to Check Number Is Positive or Negative in JavaScript

```javascript
function checkNumber(num) {
  if (num > 0) {
    console.log(`${num} is positive`);
  } else if (num < 0) {
    console.log(`${num} is negative`);
  } else {
    console.log(`${num} is zero`);
  }
}
```

<hr>

# Q-23

## Find the Character Is Vowel or Not ?

### Ans:

- Here is the javascript code to find the Character Is Vowel or Not.

```javascript
function isVowel(character) {
  let vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(character)) {
    return true;
  } else {
    return false;
  }
}
```

<hr>

# Q-24

## Write to check whether a number is negative, positive or zero?

### Ans:

- Here is the javascript code to Check whether a number is negative, positive or zero

```javascript
function checkNumber(num) {
  if (num > 0) {
    console.log(`${num} is positive`);
  } else if (num < 0) {
    console.log(`${num} is negative`);
  } else {
    console.log(`${num} is zero`);
  }
}
```

<hr>

# Q-25

## Write to find number is even or odd using ternary operator in JS?

### Ans:

- Here is the javascript code to find number is even or odd using ternary operator in JS.

```javascript
function isEvenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
```

<hr>

# Q-26

## Write find maximum number among 3 numbers using ternary operator in JS?

### Ans:

- Here is the javascript code to find maximum number among 3 numbers using ternary operator in JS.

```javascript
function findMax(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}
```

<hr>

# Q-27

## Write to find minimum number among 3 numbers using ternary operator in JS?

### Ans:

- Here is the javascript code to find minimum number among 3 numbers using ternary operator in JS.

```javascript
function findMin(a, b, c) {
  return a < b ? (a < c ? a : c) : b < c ? b : c;
}
```

<hr>

# Q-28

## Write to find the largest of three numbers in JS?

### Ans:

- Here is the javascript code to find the largest of three numbers.

```javascript
function findMax(a, b, c) {
  return Math.max(a, b, c);
}
```

- Here is on other way to do same task.

```javascript
function findMax(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}
```

<hr>

# Q-29

## Write to show i. Monday to Sunday using switch case in JS? ii. Vowel or Consonant using switch case in JS?

### Ans:

1. **Monday to Sunday using switch case in JS:**

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);
```

2. **Vowel or Consonant using switch case in JS:**

```javascript
function checkVowelOrConsonant(character) {
  switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return "Vowel";
    default:
      return "Consonant";
  }
}
```

<hr>

# Q-30

## What are the looping structures in JavaScript? Any one Example?

### Ans:

- JavaScript have various looping structures to execute repeating block of code until a specified condition is true.
- The looping structures in JavaScript are:

  1. **For loop:**

  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

  2. **While loop:**

  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

  3. **Do-while loop:**

  ```javascript
  let i = 0;

  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

  <hr>

# Q-31

## Write a print 972 to 897 using for loop in JS?

### Ans:

- Here is the javascript code to print 972 to 897 using for loop.

```javascript
for (let i = 972; i >= 897; i--) {
  console.log(i);
}
```

<hr>

# Q-32

## Write to print factorial of given number?

### Ans:

- Here is the javascript code to print factorial of given number.

```javascript
function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}
```

<hr>

# Q-33

## Write to print Fibonacci series up to given numbers?

### Ans:

- Here is the javascript code to print fibonacci series up to given number.

```javascript
function fibonacciSeries(num) {
  let fibSeries = [];

  if (num >= 1) fibSeries.push(0);
  if (num >= 2) fibSeries.push(1);

  for (let i = 2; i < num; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }
  console.log(fibSeries.join(", "));
}
```

<hr>

# Q-34

## Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS?

### Ans:

- Here is the javascript code to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS.

```javascript
function reverseNumber(num) {
  // Convert the number to a string
  let numStr = num.toString();

  // Split the string into an array of characters, reverse the array, and join it back into a string
  let reversedStr = numStr.split("").reverse().join("");

  // Convert the reversed string back to a number
  let reversedNum = parseInt(reversedStr, 10);

  // Return the reversed number
  return reversedNum;
}
```

<hr>

# Q-35

## Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS?

### Ans:

- Here is the code of javascript to make a summation of given number.

```javascript
function sumOfDigits(num) {
  // Convert the number to a string
  let numStr = num.toString();

  // Split the string into an array of characters, map each character to an integer, and sum the integers
  let sum = numStr
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

  // Print the sum
  console.log(sum);

  return sum;
}
```

<hr>

# Q-36

## Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -5) in JS?

### Ans:

- Here is the javascript code to Write a program you have to make a summation of first and last Digit.

```javascript
function sumFirstAndLastDigits(num) {
  // Convert the number to a string
  let numStr = num.toString();

  // Get the first and last digits
  let firstDigit = parseInt(numStr[0], 10);
  let lastDigit = parseInt(numStr[numStr.length - 1], 10);

  // Compute the sum of the first and last digits
  let sum = firstDigit + lastDigit;

  // Print the sum
  console.log(sum);

  return sum;
}
```

<hr>

# Q-37

## Use console.log() and escape characters to print the following pattern in JS?

`1 1 1 1 1`
`2 1 2 4 8`
`3 1 3 9 27`
`4 1 4 16 64`
`5 1 5 25 125`

<hr>

# Q-38

## Use pattern in console.log in JS?

1. `1`
   `1 0`
   `1 0 1`
   `1 0 1 0`
   `1 0 1 0 1`

- Here is the javascript code to print the pattern

```javascript
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += (j % 2) + " ";
  }
  console.log(row.trim());
}
```

2. `A `
   `B C`
   `D E F`
   `G H I J`
   `K L M N O`

- Here is the javascript code to print the pattern

```javascript
let charCode = 65; // ASCII code for 'A'

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += String.fromCharCode(charCode) + " ";
    charCode++;
  }
  console.log(row.trim());
}
```

3. `1`
   `2 3`
   `4 5 6`
   `7 8 9 10`
   `11 12 13 14 15`

- Here is the javascript code to print the pattern

```javascript
let num = 1; // Starting number

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }
  console.log(row.trim());
}
```

4. `*`
   `* *`
   `* * *`
   `* * * *`
   `* * * * *`

- Here is the javascript code to print the pattern

```javascript
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row.trim());
}
```

<hr>

# Q-39

## Accept 3 numbers from user using while loop and check each numbers palindrome

### Ans:

- Here is the javascript code to Accept 3 numbers from user using while loop and check each numbers palindrome

```javascript
function isPalindrome(num) {
  let str = num.toString();
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

let count = 0;
let numbers = [];

while (count < 3) {
  let input = prompt(`Enter number ${count + 1}:`);
  let num = parseInt(input);
  if (!isNaN(num)) {
    numbers.push(num);
    count++;
  } else {
    alert("Please enter a valid number.");
  }
}

numbers.forEach((num) => {
  if (isPalindrome(num)) {
    console.log(`${num} is a palindrome`);
  } else {
    console.log(`${num} is not a palindrome`);
  }
});
```

<hr>

# Q-40

## Write a JavaScript Program to display the current day and time in the following format. Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?

### Ans:

- Here is the javascript program to display the current day and time

```javascript
// Function to get the current day and time
function displayCurrentDayAndTime() {
  // Array to get the day of the week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get current date
  const currentDate = new Date();

  // Get the day of the week
  const day = days[currentDate.getDay()];

  // Get the current hours, minutes, and seconds
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Determine the period (AM/PM)
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, set it to 12

  // Add leading zero to minutes and seconds if they are less than 10
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the current day and time
  const currentTimeString = `Today is ${day}. Current Time is ${hours} ${period}: ${formattedMinutes} : ${formattedSeconds}`;
  console.log(currentTimeString);
}

// Call the function
displayCurrentDayAndTime();
```

<hr>

# Q-41

## Write a JavaScript program to get the current date?

### Ans:

- Here is the javascript program to get the current date.

```javascript
// Function to get the current date
function displayCurrentDate() {
  // Create a new Date object for the current date and time
  const currentDate = new Date();

  // Get the day of the month, month, and year
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  const year = currentDate.getFullYear();

  // Format the date as MM/DD/YYYY
  const formattedDate = `${month}/${day}/${year}`;

  // Display the current date
  console.log(`Current Date: ${formattedDate}`);
}

// Call the function
displayCurrentDate();
```

<hr>

# Q-42

## Write a JavaScript program to compare two objects?

### Ans:

- Here is the javascript program to compare two objects

```javascript
// Function to compare two objects
function deepEqual(obj1, obj2) {
  // Check if both arguments are objects
  if (
    typeof obj1 === "object" &&
    obj1 !== null &&
    typeof obj2 === "object" &&
    obj2 !== null
  ) {
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is different
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Check if all keys and values are the same
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  } else {
    // If either argument is not an object, use strict equality
    return obj1 === obj2;
  }
}
```

<hr>

# Q-43

## Write a JavaScript program to convert an array of objects into CSV string?

### Ans:

- Here is the javascript program to convert an array of objects into CSV string.

```javascript
// Function to convert an array of objects into a CSV string
function arrayToCSV(array) {
  if (array.length === 0) return "";

  // Extract the keys (headers) from the first object
  const keys = Object.keys(array[0]);

  // Create the header row
  const header = keys.join(",");

  // Create the rows for each object
  const rows = array.map((obj) => {
    return keys
      .map((key) => {
        // Handle values that contain commas, quotes, or newlines
        const value =
          obj[key] === undefined || obj[key] === null
            ? ""
            : obj[key].toString();
        if (
          value.includes(",") ||
          value.includes('"') ||
          value.includes("\n")
        ) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      })
      .join(",");
  });

  // Combine the header and rows into a single CSV string
  return [header, ...rows].join("\n");
}
```

<hr>

# Q-44

## Write a JavaScript program to capitalize first letter of a string?

### Ans:

- Here is the javascript program to capitalize first letter of a string.

```javascript
// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  if (!string) return ""; // Check if the string is empty

  return string.charAt(0).toUpperCase() + string.slice(1);
}
```

<hr>

# Q-45

## Write a JavaScript program to determine if a variable is array?

### Ans:

- Here is the javascript program to determine if a variable is array.

```javascript
// Function to check if a variable is an array
function isArray(variable) {
  return Array.isArray(variable);
}
```

<hr>

# Q-46

## Write a JavaScript program to clone an array?

### Ans:

- Here is the javascript program to clone an array.

```javascript
// Function to clone an array using slice
function cloneArraySlice(arr) {
  return arr.slice();
}
```

<hr>

# Q-47

## What is the drawback of declaring methods directly in JavaScript objects?

### Ans:

1. Memory Inefficiency

- When methods are declared directly inside an object, each instance of that object gets its own copy of the method. This can lead to significant memory overhead when multiple instances of the object are created, as each instance stores its own version of the method.

2. Difficulties in Code Maintenance and Updates

- When methods are defined directly in the object, any changes to the method require updating all instances of the object. This can lead to maintenance difficulties, especially in large codebases.

3. Lack of Shared Behavior

- With methods declared directly in objects, shared behavior is harder to manage. Inheritance and the use of prototypes become less effective, reducing the ability to share behavior across instances efficiently.

4. Performance Implications

- Creating methods inside the constructor or directly in the object can lead to performance issues due to increased memory usage and potential garbage collection overhead.

<hr>

# Q-48

## Print the length of the string on the browser console using console.log()?

### Ans:

- Here is the javascript program to print the length on the browser console using console.log().

```javascript
const myString = "Hello, world!";

const stringLength = myString.length;

console.log("The length of the string is:", stringLength);
```

<hr>

# Q-49

## Change all the string characters to capital letters using toUpperCase() method?

### Ans:

- Here is the javascript program to Change all the string characters to capital letters using toUpperCase() method.

```javascript
const myString = "Hello, world!";

const upperCaseString = myString.toUpperCase();

console.log("The uppercase string is:", upperCaseString);
```

<hr>

# Q-50

## What is the drawback of declaring methods directly in JavaScript objects?

### Ans:

1. Memory Inefficiency

- When methods are declared directly inside an object, each instance of that object gets its own copy of the method. This can lead to significant memory overhead when multiple instances of the object are created, as each instance stores its own version of the method.

2. Difficulties in Code Maintenance and Updates

- When methods are defined directly in the object, any changes to the method require updating all instances of the object. This can lead to maintenance difficulties, especially in large codebases.

3. Lack of Shared Behavior

- With methods declared directly in objects, shared behavior is harder to manage. Inheritance and the use of prototypes become less effective, reducing the ability to share behavior across instances efficiently.

4. Performance Implications

- Creating methods inside the constructor or directly in the object can lead to performance issues due to increased memory usage and potential garbage collection overhead.

<hr>

# Q-51

## Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?

### Ans:

- Here is the javascript program to get the current date. Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy.

```javascript
// Function to get the current date in the specified format
function getCurrentDate(format) {
  const currentDate = new Date();

  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  const year = currentDate.getFullYear();

  switch (format) {
    case "mm-dd-yyyy":
      return `${month}-${day}-${year}`;
    case "mm/dd/yyyy":
      return `${month}/${day}/${year}`;
    case "dd-mm-yyyy":
      return `${day}-${month}-${year}`;
    case "dd/mm/yyyy":
      return `${day}/${month}/${year}`;
    default:
      return "Invalid format";
  }
}
```

<hr>

# Q-52

## Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript?

### Ans:

- Here is the javascript program to Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript.

```javascript
const str = "30 Days Of JavaScript";
const position = str.indexOf("a");

console.log("Position of the first occurrence of 'a':", position);
```

<hr>

# Q-53

## Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript?

### Ans:

- Here is the javascript Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

```javascript
const str = "30 Days Of JavaScript";
const position = str.lastIndexOf("a");

console.log("Position of the last occurrence of 'a':", position);
```

<hr>

# Q-54

## Form Validtion in JS?

### Ans:

- Form validation in JavaScript involves ensuring that user input in web forms meets certain criteria before it is submitted to the server. This helps prevent incorrect or malicious data from being submitted, improving the user experience and data integrity. Here's a basic example of how you can perform form validation in JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form Validation</title>
  </head>
  <body>
    <h2>Registration Form</h2>
    <form id="registrationForm" onsubmit="return validateForm()">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required /><br /><br />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required /><br /><br />

      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
      /><br /><br />

      <input type="submit" value="Submit" />
    </form>

    <script>
      function validateForm() {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Check if username is empty
        if (username === "") {
          alert("Please enter a username");
          return false;
        }

        // Check if email is valid
        if (!isValidEmail(email)) {
          alert("Please enter a valid email address");
          return false;
        }

        // Check if password is at least 8 characters long
        if (password.length < 8) {
          alert("Password must be at least 8 characters long");
          return false;
        }

        // Form is valid
        return true;
      }

      function isValidEmail(email) {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    </script>
  </body>
</html>
```

<hr>

# Q-55

## Form in Email, number, Password, Validation?

### Ans:

- Here is the example of a form with validation for email, number, and password fields using JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form Validation</title>
    <style>
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <h2>Registration Form</h2>
    <form id="registrationForm" onsubmit="return validateForm()">
      <label for="email">Email:</label><br />
      <input type="email" id="email" name="email" required /><br />
      <span id="emailError" class="error"></span><br />

      <label for="phoneNumber">Phone Number:</label><br />
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        pattern="[0-9]{10}"
        required
      /><br />
      <span id="phoneNumberError" class="error"></span><br />

      <label for="password">Password:</label><br />
      <input type="password" id="password" name="password" required /><br />
      <span id="passwordError" class="error"></span><br />

      <input type="submit" value="Submit" />
    </form>

    <script>
      function validateForm() {
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const password = document.getElementById("password").value;
        let isValid = true;

        // Validate email
        const emailError = document.getElementById("emailError");
        if (!isValidEmail(email)) {
          emailError.textContent = "Please enter a valid email address";
          isValid = false;
        } else {
          emailError.textContent = "";
        }

        // Validate phone number
        const phoneNumberError = document.getElementById("phoneNumberError");
        if (!isValidPhoneNumber(phoneNumber)) {
          phoneNumberError.textContent =
            "Please enter a valid 10-digit phone number";
          isValid = false;
        } else {
          phoneNumberError.textContent = "";
        }

        // Validate password
        const passwordError = document.getElementById("passwordError");
        if (password.length < 8) {
          passwordError.textContent =
            "Password must be at least 8 characters long";
          isValid = false;
        } else {
          passwordError.textContent = "";
        }

        return isValid;
      }

      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      function isValidPhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
      }
    </script>
  </body>
</html>
```

<hr>

# Q-56

## Dynamic Form Validation in JS?

### Ans:

- Dynamic form validation in JavaScript involves validating form inputs as the user interacts with them, providing real-time feedback on whether the input is valid or not. Here's an example of how to implement dynamic form validation using JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dynamic Form Validation</title>
    <style>
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <h2>Registration Form</h2>
    <form id="registrationForm">
      <label for="email">Email:</label><br />
      <input type="email" id="email" name="email" required /><br />
      <span id="emailError" class="error"></span><br />

      <label for="phoneNumber">Phone Number:</label><br />
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        pattern="[0-9]{10}"
        required
      /><br />
      <span id="phoneNumberError" class="error"></span><br />

      <label for="password">Password:</label><br />
      <input type="password" id="password" name="password" required /><br />
      <span id="passwordError" class="error"></span><br />

      <input type="submit" value="Submit" disabled />
    </form>

    <script>
      const form = document.getElementById("registrationForm");
      const emailInput = document.getElementById("email");
      const phoneNumberInput = document.getElementById("phoneNumber");
      const passwordInput = document.getElementById("password");
      const emailError = document.getElementById("emailError");
      const phoneNumberError = document.getElementById("phoneNumberError");
      const passwordError = document.getElementById("passwordError");

      // Validate email
      emailInput.addEventListener("input", () => {
        if (!isValidEmail(emailInput.value)) {
          emailError.textContent = "Please enter a valid email address";
        } else {
          emailError.textContent = "";
        }
        checkFormValidity();
      });

      // Validate phone number
      phoneNumberInput.addEventListener("input", () => {
        if (!isValidPhoneNumber(phoneNumberInput.value)) {
          phoneNumberError.textContent =
            "Please enter a valid 10-digit phone number";
        } else {
          phoneNumberError.textContent = "";
        }
        checkFormValidity();
      });

      // Validate password
      passwordInput.addEventListener("input", () => {
        if (passwordInput.value.length < 8) {
          passwordError.textContent =
            "Password must be at least 8 characters long";
        } else {
          passwordError.textContent = "";
        }
        checkFormValidity();
      });

      // Check form validity
      function checkFormValidity() {
        const isValidForm =
          isValidEmail(emailInput.value) &&
          isValidPhoneNumber(phoneNumberInput.value) &&
          passwordInput.value.length >= 8;
        document.querySelector('input[type="submit"]').disabled = !isValidForm;
      }

      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      function isValidPhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
      }
    </script>
  </body>
</html>
```

<hr>

# Q-57

## how many type of JS Event? How to use it ?

### Ans:

JavaScript events can be categorized into several types based on their sources and triggers. Here are some common types of JavaScript events and how to use them:

1. #### Mouse Events:

- **click:** Triggered when a mouse button is clicked.
- **dblclick:** Triggered when a mouse button is double-clicked.
- **mouseover:** Triggered when the mouse pointer moves over an element.
- **mouseout:** Triggered when the mouse pointer moves out of an element.
- **mousedown:** Triggered when a mouse button is pressed down on an element.
- **mouseup:** Triggered when a mouse button is released over an element.

2. #### Keyboard Events:

- **keydown:** Triggered when a key is pressed down.
- **keypress:** Triggered when a key is pressed down and then released.
- **keyup:** Triggered when a key is released.

3. #### Form Events:

- **submit:** Triggered when a form is submitted.
- **reset:** Triggered when a form is reset.

4. #### Focus Events:

- **focus:** Triggered when an element gains focus.
- **blur:** Triggered when an element loses focus.

5. #### Window Events:

- **load:** Triggered when the window has finished loading.
- **resize:** Triggered when the window is resized.
- **scroll:** Triggered when the window is scrolled.

<hr>

# Q-59

## What is Bom vs Dom in JS?

### Ans:

1. **DOM (Document Object Model):**

- The DOM represents the structure of a document as a tree-like structure where each node represents a part of the document, such as elements, attributes, and text.
- It provides a structured representation of HTML or XML documents, allowing JavaScript to interact with and manipulate the document's content, structure, and style.
- With the DOM, you can dynamically create, modify, and delete elements and attributes, change styles, handle events, and perform other operations on the document.

2. BOM (Browser Object Model):

- The BOM represents additional objects provided by the browser environment that are not directly related to the document structure.
- It includes objects such as window, navigator, screen, history, and location, which provide information and control over various aspects of the browser and the client's environment.
- Unlike the DOM, which deals with the structure and content of the document, the BOM deals with the browser window and its properties, the client's screen properties, the browser's history and location, and other browser-specific features.

<hr>

# Q-60

## Array vs object defences in JS?

### Ans:

Array vs object difference on given point

1.  **Structure:**

    - _Array:_ An array is an ordered collection of values, each identified by an index. Arrays are represented by square brackets ([]) and can contain elements of any data type, including other arrays.
    - _Object:_ An object is an unordered collection of key-value pairs, where each key is a unique string (or symbol), and each value can be of any data type. Objects are represented by curly braces ({}).

2.  **Accessing Elements:**

    - _Array:_ Elements in an array are accessed using numeric indices, starting from 0. For example, myArray[0] accesses the first element of the array.
    - _Object:_ Properties in an object are accessed using their keys. For example, myObject.propertyName or myObject['propertyName'] accesses the value associated with the key 'propertyName'.

3.  **Order:**

    - _Array:_ Arrays maintain the order of elements as they are inserted. The order of elements in an array is significant.
    - _Object:_ Objects do not have a defined order for their properties. The order in which properties are defined may not necessarily be the order in which they are enumerated.

4.  **Mutability:**

    - _Array:_ Arrays are mutable, meaning their elements can be modified, added, or removed after creation.
    - _Object:_ Objects are mutable as well. Properties of an object can be modified, added, or deleted.

5.  **Iterating:**

    - _Array:_ Arrays can be iterated using loops like for, for...of, or forEach.
    - _Object:_ Objects can be iterated using for...in loop, which iterates over the keys (properties) of the object.

6.  **Use Cases:**
    - _Array:_ Arrays are typically used when dealing with ordered collections of similar items, such as a list of names, numbers, or objects.
    - _Object:_ Objects are used to represent more complex data structures and entities, often as collections of key-value pairs, such as representing a person with properties like name, age, and address.

<hr>

# Q-61

## Split the string into an array using split() Method?

### Ans:

- Here is the javascript program to Split the string into an array using split() Method

```javascript
const str = "Hello, world!";
const array = str.split(", "); // Splitting by comma and space

console.log(array);
```

<hr>

# Q-62

## Check if the string contains a word Script using includes() method?

### Ans:

- Here is the javascript program.

```javascript
const str = "30 Days Of JavaScript";
const containsScript = str.includes("Script");

console.log(containsScript);
```

<hr>

# Q-63

## Change all the string characters to lowercase letters using toLowerCase() Method.

### Ans:

- Here is the javascript program to Change all the string characters to lowercase letters using toLowerCase() Method.

```javascript
const str = "Hello, WORLD!";
const lowercaseStr = str.toLowerCase();

console.log(lowercaseStr); // Output: "hello, world!"
```

<hr>

# Q-64

## 4 What is Character at index 15 in ’30 Days of JavaScript’ string? Use charAt() method.

### Ans:

- Here is the javascript program.

```javascript
const str = "30 Days of JavaScript";
const charAtIndex15 = str.charAt(15);

console.log("Character at index 15:", charAtIndex15);
```

<hr>

# Q-65

## copy to one string to another string in JS?

### Ans:

- Here is the javascript program to copy to one string to another string in JS.

```javascript
const originalString = "Hello, world!";
let copiedString = originalString;

console.log(copiedString);
```

<hr>

# Q-66

## Find the length of a string without using libraryFunction?

### Ans:

- Here is the javascript program to Find the length of a string without using libraryFunction.

```javascript
function findStringLength(str) {
  let length = 0;
  for (let char of str) {
    length++;
  }
  return length;
}

const myString = "Hello, world!";
const length = findStringLength(myString);

console.log("Length of the string:", length); // Output: 13
```

<hr>
