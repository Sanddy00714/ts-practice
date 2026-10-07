export {};

const overall: string[] = ["smoke", "login", "checkout"];
console.log(`data: ${overall}`);

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

const Number: number[] = [3, 7, 7, 2];
for (let i = 0; i < Number.length - 1; i++) {
  if (Number[i] === Number[i + 1]) {
    console.log(`${Number[i]} and ${Number[i + 1]} match`);
  }
}

for (let i = 1; i <= 3; i++) {
  console.log(`Attempt ${i}`);
}
