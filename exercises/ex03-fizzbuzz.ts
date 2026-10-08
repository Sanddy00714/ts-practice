export {};

function fizzBuzz(n: number): string {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else {
    return `${n}`;
  }
}

function fizzBuzzList(limit: number): string[] {
  const results: string[] = [];

  for (let i = 1; i <= limit; i++) {
    results.push(fizzBuzz(i));
  }

  return results;
}

// Test cases
const testCases = [
  { input: 3, expected: "Fizz" },
  { input: 5, expected: "Buzz" },
  { input: 15, expected: "FizzBuzz" },
  { input: 7, expected: "7" },
];

// PASS / FAIL tests
for (const { input, expected } of testCases) {
  const actual = fizzBuzz(input);

  if (actual === expected) {
    console.log(`PASS: fizzBuzz(${input}) → ${actual}`);
  } else {
    console.log(
      `FAIL: fizzBuzz(${input}) → Expected: ${expected}, Actual: ${actual}`,
    );
  }
}

// Final visual check
console.log(fizzBuzzList(15).join(", "));
