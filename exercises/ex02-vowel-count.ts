const sentence = "Automation Testing with Typescript";
let vowelCount = 0;
let consonantCount = 0;

for (const char of sentence) {
    if ("aeiou".includes(char.toLowerCase())) {
        vowelCount++;
    }
    else if (char !== " " ) {
        consonantCount++;
    }
}

console.log(`Vowels in "${sentence}": ${vowelCount}`);
console.log(`Consonants in "${sentence}": ${consonantCount}`);
console.log(`${sentence.toUpperCase()}`);