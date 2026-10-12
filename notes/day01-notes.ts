console.log("1. Start");
setTimeout(() => console.log("2. Timer done"), 1000);
console.log("3. End");

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// async function main(): Promise<void> {
//     console.log("1. start");
//     await wait(1000);
//     console.log("2. one second later");
//     console.log("3. End");
// }
// main();


// async function getUser(): Promise<string>{
//     await wait(500);
//     return "standard_user";
// } 

// async function main(): Promise<void> {
//     const user = getUser();
//     console.log(user);

//     const user2 = await getUser();
//     console.log(user2);
// }
//  main();

// async function main(): Promise<void> {
// //   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
// const response = await fetch("https://jsonplaceholder.typicode.com/users/999");
// //   console.log(response.status);   // 200
// //   console.log(response.ok);       // true for any 2xx status

//     console.log(response.status);   // 404
//     console.log(response.ok); 

//   const user = await response.json();
//   console.log(user.name);         // Leanne Graham
// }

// main();
async function main() {
  try {
    const response = await fetch(
      "https://this-domain-does-not-exist"
    );

    console.log("Status:", response.status);
  } catch (error) {
    console.log("Request failed:", error);
  }
}

main();