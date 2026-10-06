export{}

const numbers = [12, 45, 7, 89, 23,89,3];
// const numbers = [-5, -2, -9];
let largest = -Infinity;

for (const num of numbers){
    if (num > largest){
        largest = num;
    }
}

console.log(`Largest: ${largest}`);