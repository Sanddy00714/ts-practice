export {};

const overall: string[] = ["smoke", "login", "checkout"];
for (const all of overall){
    console.log(all);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

const match: number[] = [3, 7, 7, 2];
for (let i = 0; i < match.length - 1; i++) {
  if (match[i] === match[i + 1]) {
    console.log(`${match[i]} and ${match[i + 1]} match`);
  }
}

for (let i = 1; i <= 3; i++) {
  console.log(`Attempt ${i}`);
}
