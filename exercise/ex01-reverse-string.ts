const input = "Playwright";
const word1 = "QA";
const word2 = "racecar";
let reversed = "";
let reversed1 = "";
let reversed2 = "";

// loop form the last index to 0
for (let i=input.length -1; i >= 0; i--) {
    reversed += input[i];
}

console.log(`Original: ${input}, Reversed: ${reversed}`);

for (let i=word1.length -1; i>=0; i--){
    reversed1 += word1[i];
}

console.log(`Original: ${word1}, Reversed: ${reversed1}`);

for (let i=word2.length -1; i>=0; i--){
    reversed2 += word2[i];
}
console.log(`Original: ${word2}, Reversed: ${reversed2}`);

const sentence = "Automation Testing with Typescript";
let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]?.toLowerCase();
    if (letter && "aeiou".includes(letter)) {
        vowelCount++;
    }
}

for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]?.toLowerCase();
    if (letter && !"aeiou".includes(letter) && !" ".includes(letter)) {
        consonantCount++;
    }
}

console.log(`Vowels in "${sentence}": ${vowelCount}`);
console.log(`Consonants in "${sentence}": ${consonantCount}`);
console.log(`${sentence.toUpperCase()}`);
