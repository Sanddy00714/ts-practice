export {};

// TS2588: baseUrl was a const but gets reassigned below → changed to let
let baseUrl: string = "https://www.saucedemo.com";

// TS2322: was the string "30000", expected a number → removed the quotes
const timeout: number = 30000;

// TS2304: retryCount was used but never declared → declared it
let retryCount: number = 0;

function login(username: string, password: string): boolean {
  return username === "standard_user" && password === "secret_sauce";
}

// TS2554: expected 2 arguments, got 1 → added the password
login("standard_user", "secret_sauce");

// TS2345: password must be a string, got a number → put it in quotes
login("standard_user", "12345");

const user = { username: "standard_user", isLocked: false };

// TS2551: typo usrname, property doesn't exist → fixed to username
console.log(user.username);

baseUrl = "https://staging.saucedemo.com";

console.log(retryCount);

// TS2532: tags[0] might be undefined if the array is empty
// → ?. avoids the crash, and ?? "" returns an empty string instead
function getFirstTag(tags: string[]): string {
  return tags[0]?.toUpperCase() ?? "";
}

// TS7006: parameter n had no type (implicit any) → added n: number
function double(n: number): number {
  return n * 2;
}

console.log(timeout, getFirstTag(["smoke"]), double(2));
