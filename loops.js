//1. what will the following code output?  (Answer:no output)
let x = 5;
while (x < 3) {
  console.log(x);
  x++;
}

// 2.what is be the result of the following code ?
let y = 0;
do {
  console.log(y);
  y++;
} while (y < 2);

// 3.do while loops execute atleast once , while while loops may not execute at all: Answer
console.log("\n"); //new line

// 4.what is the following code print ?
let count = 5;
do {
  console.log(count);
  count--;
} while (count > 0);

//5.do while loop :Answer
console.log("\n"); //new line

//6.what will be the output of the following code?
let z = 0;
while (z < 3) {
  console.log(z);
  z++;
}

// 7. the while loop checkes the condition before the code block runs,while the do while loop checks the condition after.:Answer
console.log("\n"); //new line

// 8.what will be the output of this code?
let i = 0;
while (i < 5) {
  console.log(i);
  if (i === 3) break;
  i++;
}

// 9. do{set of stmts}while{condition}:Answer
console.log("\n"); //new line

// 10.what will be the output of this code?
let a = 0;
do {
  console.log(a);
  a++;
} while (a < 0);

// write the a code to below questions
console.log("\n"); //new line

// 1. write a while and do while loop that prints the numbers from 1 to 5 in the console.

let b = 1;
while (b <= 5) {
  console.log(b);
  b++;
}

console.log("\n"); //new line

let c = 1;
do {
  console.log(c);
  c++;
} while (c <= 5);

console.log("\n"); //new  line
// 2.how would you exit a while loop if a specific condition is met (eg: when the numbers equals 3),write a example code?
let d = 1;
while (d < 10) {
  console.log(d);
  if (d === 3) {
    break;
  }
  d++;
}

console.log("\n"); //new line
// do while

let d1 = 1;
do {
  console.log(d1);
  if (d1 === 3) {
    break;
  }
  d1++;
} while (d1 <= 10);

console.log("\n"); //new line

// 3.write a while and do while loop that prints numbers from 1 to 10, but skips printing the any number from 1 to 10?
let e = 1;
while (e <= 10) {
  if (e === 3) {
    e++;
    continue;
  }
  console.log(e);
  e++;
}

console.log("\n"); //new line

// do while loop
let f = 1;
do {
  if (f === 3) {
    f++;
    continue;
  }
  console.log(f);
  f++;
} while (f <= 10);

console.log("\n"); //new line
//4.write a while loop that prints all even numbers from 0 to 20 ?
let g = 0;
while (g <= 20) {
  if (g % 2 == 0) {
    console.log(g);
  }
  g++;
}

console.log("\n");
// write a code for below questions using conditional statements

//1.write an if statement in javascript that checks if a number is greater than 10,if true

let num = 1;
if (num > 10) {
  console.log("a number is greater than 10");
} else {
  console.log("a number is not greater than 10");
}

console.log("\n");
// 2.write an if-else statement that checks if a number is even or odd, and prints "even" if it's even, or "odd" if it's odd
let num1 = 3;
if (num1 % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

console.log("\n");
// 3.write an if-else if-else ladder that checks the value of a variable grade and prints:
// "A" for grades 90 and above,
// "B" for grades 80 to 89,
// "C" for grades 70 to 79,
// "F" for grades below 70.
let grade = 60;
if (grade >= 90) {
  console.log("A grade");
} else if (grade >= 80) {
  console.log("B grade");
} else if (grade >= 70) {
  console.log("C grade");
} else {
  console.log("F grade");
}

console.log("\n");
//4. Write a nested if statement that checks if a number is positive and, if true, checks if it's even or odd.
let number = 20;
if (number > 0) {
  console.log("The number is positive");
  if (number % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
} else {
  console.log("The number is not positive");
}

console.log("\n");
// 5.Rewrite the following code using if else statement :
// let age = 20;
// console.log(age >= 18 ? "Adult" : "Minor");
let age = 17;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

console.log("\n");
//6. Write an if statement that checks if a number is between 10 and 20 (inclusive). Print "In range" if true, otherwise print "Out of range".
let digit = 11;
if (digit >= 10 && digit <= 20) {
  console.log("In range");
} else {
  console.log("Out of range");
}

console.log("\n");
//7. What is the difference between == and === in an if statement in JavaScript? Provide an example where each would behave differently.
// Equal (==): Checks if two values are equal.
// Strict Equal (===): Checks if two values are equal and of the same data type.
let num4 = 1;
let str = "1";
if (num4 == str) {
  console.log("num4 is equal to str");
} else {
  console.log("num4 is not equal to str");
}
if (num4 === str) {
  console.log("num4 is strict equal to str");
} else {
  console.log("num4 is strict not equal to str");
}

console.log("\n");
// Write an if statement that checks if a number is between 10 and 20 or if it's exactly 30, and prints "Condition met" if true.
let num5 = 30;
if ((num5 >= 10 && num5 <= 20) || num5 === 30) {
  console.log("Condition met");
} else {
  console.log("Condition not met");
}
