export {};

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main(): Promise<void> {
  console.log("A");
  setTimeout(() => console.log("B"), 0);
  console.log("C");
  await wait(100);
  console.log("D");
  const pending = wait(100);
  console.log("E");
  await pending;
  console.log("F");
}

main();
console.log("G");

// My prediction: A,C,G,B,D,F,E
// Actual output: A,C,G,B,D,E,F 
// What surprised me: pending keeps waiting till all one execute