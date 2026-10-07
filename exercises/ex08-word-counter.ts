export{};

function countWords(sentence: string, separator: string = " "): number {
  const pieces = sentence.split(separator);
  let count = 0;

  for (const piece of pieces) {
    if (piece !== "") {
      count++;
    }
  }
  return count;
}

const testCases = [
  { input: "Playwright makes testing easy", expected: 4 },
  { input: "   extra    space    here   ", expected: 3 },
  { input: "", expected: 0 },
  { input: "smoke,login,checkout", separator: ",", expected: 3 },
];

for (const { input, expected, separator} of testCases) {
  const actual = countWords(input, separator);
  const result = actual === expected ? "PASS" : "FAIL";
  console.log(`${result}: countWords("${input}") -> ${actual}`);
}
