export {};

// I use Math.abs so negative numbers still sum their digits:
// without it, -123 would skip the loop and return 0.
function sumOfDigits(n: number): number {
  let remaining = Math.abs(n);
  let sum = 0;

  while (remaining > 0) {
    sum += remaining % 10; // take the last digit
    remaining = Math.floor(remaining / 10); // remove the last digit
  }

  return sum;
}

const testCases = [
  { input: 1234, expected: 10 },
  { input: 9, expected: 9 },
  { input: 0, expected: 0 },
  { input: 1001, expected: 2 },
  { input: 98765, expected: 35 },
  { input: -123, expected: 6 },
];

for (const { input, expected } of testCases) {
  const actual = sumOfDigits(input);
  const result = actual === expected ? "PASS" : "FAIL";
  console.log(`${result}: sumOfDigits(${input}) -> ${actual}`);
}
