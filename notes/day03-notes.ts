export {};

const browsers: string[] = ["Chromium", "firefox", "webkit"];

console.log(browsers.length); //3
console.log(browsers[0]);    //"Chromium" (counting starts from 0)
console.log(browsers.includes("firefox")); // true

browsers.push("edge"); // add to the end
console.log(browsers); // ["Chromium", "firefox", "webkit", "edge"]

for (const browser of browsers) {
    console.log(`Browser: ${browser}`);
}

const user = {
    username: "standard_user",
    password: "secret_sauce",
    isLocked: false,
};

console.log(user.username); //"standard_user"
console.log(user.isLocked); //false

user.isLocked = true; // changing a property is allowed
// console.log(user.email);


const testUsers = [
    {username: "standard_user", shouldLogin:true},
    {username:"locked_out_user", shouldLogin:false},
    {username:"problem_user", shouldLogin:true},
];

for(const testUser of testUsers){
    if (testUser.shouldLogin){
        console.log(`${testUser.username}: expect LOGIN SUCCESS`);
    } else {
        console.log(`${testUser.username}: expect ERROR MESSAGE`);
    }
}

//from an object: take properties out by Name
const { username, password } = user;
console.log(username, password);

// form an array: take values out by Position
const [ firstBrowser, secondBrowser ] = browsers;
console.log(firstBrowser, secondBrowser);

//inside a loop
for(const { username, shouldLogin } of testUsers){
    console.log(`${username}->${shouldLogin}`);
}


console.log(10%3);// 1, the remainder after dividing
console.log(9%3===0);// true, so 9 is divisible by 3
 
for (let i=1; i<=5; i++){
    console.log(i);
}
