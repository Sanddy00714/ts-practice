export {};

function findLargest(numbers: number[]): number {
  let largest = -Infinity;

  for (const num of numbers) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
}

const testCases = [
  { input: [12, 45, 7, 89, 23, 89, 3], expected: 89 },
  { input: [-5, -2, -9], expected: -2 },
  { input: [42], expected: 42 },
];

for (const { input, expected } of testCases) {
  const actual = findLargest(input);

  const result = actual === expected ? "PASS" : "FAIL";

  console.log(
    `findLargest(${JSON.stringify(input)}): ${result} (Expected: ${expected}, Actual: ${actual})`,
  );
}
