// console.log("Hello World!\n==========\n");

// Exercise 1: Ignore Even
// console.log("EXERCISE 1:\n==========\n");

console.log("Exercise 1: Ignore Even");
console.log("");
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Exercise 2: FIZZBUZZ
// console.log("EXERCISE 2:\n==========\n");
console.log("");
console.log("Exercise 2: FIZZBUZZ");
console.log("");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FIZZBUZZ");
  else if (i % 3 === 0) console.log("FIZZ");
  else if (i % 5 === 0) console.log("BUZZ");
  else console.log(i);
}

// Exercise 3: Section Repeat with While and Do/While
console.log("");
console.log("Exercise 3: Section Repeat with While and Do/While");
console.log("");
console.log("While Loop, Ignore Even");
let i = 1;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
console.log("Do While Loop, Ignore Even");
let j = 1;
do {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++;
} while (j <= 100);
console.log("While Loop, FIZZBUZZ");
let k = 1;
while (k <= 100) {
  if (k % 3 === 0 && k % 5 === 0) console.log("FIZZBUZZ");
  else if (k % 3 === 0) console.log("FIZZ");
  else if (k % 5 === 0) console.log("BUZZ");
  else console.log(k);
  k++;
}
console.log("Do While Loop, FIZZBUZZ");
let l = 1;
do {
  if (l % 3 === 0 && l % 5 === 0) console.log("FIZZBUZZ");
  else if (l % 3 === 0) console.log("FIZZ");
  else if (l % 5 === 0) console.log("BUZZ");
  else console.log(l);
  l++;
} while (l <= 100);

// Exercise 4: Find Value
console.log("");
console.log("Exercise 4: Find Value");
console.log("");

let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let i = 0; i < n; i++) {
  if (i === value) {
    console.log("Found value !", value);
    break;
  } else {
    console.log("Did not find value", value);
  }
}

// Exercise 5: Customized FIZZBUZZ
console.log("");
console.log("Exercise 5: Customized FIZZBUZZ");
console.log("");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
console.log("fizzDivisor is: ", fizzDivisor);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
console.log("buzzDivisor is: ", buzzDivisor);
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
console.log("start is: ", start);
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000
console.log("end is: ", end);
console.log("");
for (let i = start; i <= end; i++) {
  if (i % fizzDivisor === 0 && i % buzzDivisor === 0)
    console.log(i, "FIZZBUZZ");
  else if (i % fizzDivisor === 0) console.log(i, "FIZZ");
  else if (i % buzzDivisor === 0) console.log(i, "BUZZ");
  else console.log(i);
}
