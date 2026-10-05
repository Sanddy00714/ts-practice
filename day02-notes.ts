const baseUrl = "https://www.saucedemo.com";
let attempts = 0;

attempts = attempts + 1; // let can change

// baseUrl = "https://google.com"; // const cannot change once declared
console.log(`URL: ${baseUrl}, attempts: ${attempts}`);

const username: string = "standard_user";
const timeoutMs: number = 30000;
const isLoggedIn: boolean = false;

let retries = 2; 

console.log(`username: ${username}, timeout: ${timeoutMs}, isLoggedIn: ${isLoggedIn}`);

const env = "staging";
const loginUrl = `${baseUrl}/login`;
const testemail = `qa_${Date.now()}@test.com`;

console.log(loginUrl);
console.log(testemail);
console.log(`Env: ${env.toUpperCase()}, retries left: ${retries}`);

const word = "Playwright";

console.log(word.length);
console.log(word[0]);
console.log(word[word.length -1]);

for (const char of word) {
    console.log(`Character: ${char}`);
}

const letter = "E";
if ("aeiou".includes(letter.toLowerCase())){
    console.log(`${letter} is a vowel`);
}




