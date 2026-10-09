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

// My prediction: ___
// Actual output: ___
// What surprised me: ___