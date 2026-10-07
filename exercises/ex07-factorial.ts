export {};

function factorial(n: number): number | string {
  if (n < 0) {
    return "Factorial is not possible for negative numbers";
  }
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

const testCases = [
  { input: 5, expected: 120 },
  { input: 1, expected: 1 },
  { input: 0, expected: 1 },
  { input: 10, expected: 3628800 },
];

for (const { input, expected } of testCases) {
  const actual = factorial(input);
  const result = actual === expected ? "PASS" : "FAIL";
  console.log(`${result}: factorial(${input}) -> ${actual}`);
}