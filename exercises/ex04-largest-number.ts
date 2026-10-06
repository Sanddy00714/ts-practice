export {};

const numbers = [12, 45, 7, 89, 23, 89, 3];
// const numbers = [-5, -2, -9];
let largest = -Infinity;
let smallest = Infinity;

for (const num of numbers) {
  if (num > largest) {
    largest = num;
  }
  if (num < smallest) {
    smallest = num;
  }
}

console.log(`Largest: ${largest}`);
console.log(`Smallest: ${smallest}`);
