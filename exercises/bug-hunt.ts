export {};

let baseUrl: string = "https://www.saucedemo.com";
const timeout: number = 30000;
let retryCount: number = 0;

function login(username: string, password: string): boolean {
    return username === "standard_user" && password === "secret_sauce";
}

login("standard_user","secret_sauce");
login("standard_user", "12345");

const user = {username: "standard_user", isLocked: false};
console.log(user.username);

baseUrl = "https://staging.saucedemo.com";

console.log(retryCount);

function getFirstTag(tags: string[]): string {
    // const first = tags[0];
    // if (first === undefined){
    //     return "";
    // }    
    // return first.toUpperCase();
    return tags[0]?.toUpperCase() ?? "";
}

function double (n: number): number{
    return n*2;
}

console.log(timeout, getFirstTag(["smoke"]), double(2));