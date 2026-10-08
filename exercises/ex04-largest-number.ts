export {};

function findLargestAndSmallest(numbers: number[]): {
  largest: number;
  smallest: number;
} {
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

  return {
    largest,
    smallest,
  };
}

const numbers = [12, 45, 7, 89, 23, 89, 3];

const result = findLargestAndSmallest(numbers);

console.log(`Largest: ${result.largest}`);
console.log(`Smallest: ${result.smallest}`);
