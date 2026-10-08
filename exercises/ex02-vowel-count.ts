export {};

function countVowels(text: string): number {
  let vowelCount = 0;

  for (const char of text) {
    if ("aeiou".includes(char.toLowerCase())) {
      vowelCount++;
    }
  }

  return vowelCount;
}

function countConsonants(text: string): number {
  let consonantCount = 0;

  for (const char of text) {
    if (char !== " " && !"aeiou".includes(char.toLowerCase())) {
      consonantCount++;
    }
  }

  return consonantCount;
}

const testCases = [
  { input: "Automation Testing With TypeScript", vowels: 11, consonants: 21 },
  { input: "xyz", vowels: 0, consonants: 3 },
  { input: "AEIOU", vowels: 5, consonants: 0 },
];

for (const { input, vowels, consonants } of testCases) {
  const actualVowels = countVowels(input);
  const actualConsonants = countConsonants(input);

  const vowelResult = actualVowels === vowels ? "PASS" : "FAIL";

  const consonantResult = actualConsonants === consonants ? "PASS" : "FAIL";

  console.log(
    `Vowels - "${input}": ${vowelResult} (Expected: ${vowels}, Actual: ${actualVowels})`,
  );

  console.log(
    `Consonants - "${input}": ${consonantResult} (Expected: ${consonants}, Actual: ${actualConsonants})`,
  );
}
