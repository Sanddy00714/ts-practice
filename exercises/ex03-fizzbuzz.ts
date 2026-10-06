export {};

const results: string[] = [];
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    results.push("FizzBuzz");
  } else if (i % 5 === 0) {
    results.push("Buzz");
  } else if (i % 3 === 0) {
    results.push("Fizz");
  } else {
    results.push(`${i}`);
  }
}

console.log(results.join(", "));
