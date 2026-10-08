export {};
function countVowelsAndConsonants(sentence: string): string {
  let vowelCount = 0;
  let consonantCount = 0;

  for (const char of sentence) {
    if ("aeiou".includes(char.toLowerCase())) {
      vowelCount++;
    } else if (char !== " ") {
      consonantCount++;
    }
  }

  return `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
}

console.log(countVowelsAndConsonants("Automation Testing with Typescript"));
