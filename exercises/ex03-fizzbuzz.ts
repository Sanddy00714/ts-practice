export{};

function fizzBuzz(limit: number): string[] {
  const results: string[] = [];

  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else {
      results.push(`${i}`);
    }
  }

  return results;
}

console.log(fizzBuzz(15).join(", "));
console.log(fizzBuzz(30).join(", "));
