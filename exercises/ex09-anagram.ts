export {};

function normalize(text: string): string {
  return text.split("").sort().join("");
}

function isAnagram(a: string, b: string): boolean {
  return normalize(a) === normalize(b);
}

// PASS/FAIL loop
const testCases = [
  { a: "listen", b: "silent", expected: true },
  { a: "Listen", b: "Silent", expected: true },
  { a: "hello", b: "world", expected: false },
  { a: "Dormitory", b: "dirty room", expected: true },
  { a: "aab", b: "abb", expected: false },
];

for (const test of testCases) {
  const actual = isAnagram(test.a, test.b);

  console.log(
    `${actual === test.expected ? "PASS" : "FAIL"}: ${test.a} / ${test.b}`,
  );
}
