export {};

function reverse(text: string): string {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}

console.log(reverse("QA"));
console.log(reverse("racecar"));
console.log(reverse("Playwright"));

function isPalindrome(text: string): boolean {
  const lower = text.toLowerCase().replaceAll(" ", "");
  return lower === reverse(lower);
}
const testcases = [
  { input: "racecar", expected: true },
  { input: "level", expected: true },
  { input: "Playwright", expected: false },
  { input: "Racecar", expected: true },
  { input: "Never odd or even", expected: true }, //<-new
];

for (const { input, expected } of testcases) {
  const actual = isPalindrome(input); // calling function
  const result = actual === expected ? "PASS" : "FAIL";
  console.log(`${result}: isPalindrome("${input}") -> ${actual}`);
}
