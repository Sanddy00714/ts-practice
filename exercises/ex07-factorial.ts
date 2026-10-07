export {};

function factorial(n: number): number | string {
  if (n < 0) {
    return "Factorial is not possible for negative numbers";
  }
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(2));
