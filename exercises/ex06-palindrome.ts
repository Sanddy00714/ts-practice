export {};

function reverse(text: string): string {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}

for (const word of ["Playwright", "QA", "racecar"]){
    console.log(`Original: ${word}, Reversed: ${reverse(word)}`);
}


function isPalindrome(text: string): boolean {
  const lower = text.toLowerCase().replaceAll(" ", "");
  return lower === reverse(lower);
}
const testCases = [
  { input: "racecar", expected: true },
  { input: "level", expected: true },
  { input: "Playwright", expected: false },
  { input: "Racecar", expected: true },
  { input: "Never odd or even", expected: true }, //<-new
];

for (const { input, expected } of testCases) {
  const actual = isPalindrome(input); // calling function
  const result = actual === expected ? "PASS" : "FAIL";
  console.log(`${result}: isPalindrome("${input}") -> ${actual}`);
}
