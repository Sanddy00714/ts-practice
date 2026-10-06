export{};

const word="Playwright";
let reversedWord = "";

for(let i=word.length -1; i>=0; i--){
    reversedWord += word[i];

}

console.log(`Original: ${word}, Reversed: ${reversedWord}`);
