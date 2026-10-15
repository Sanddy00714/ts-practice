export type LoginResult = "success" | "locked" | "error";

export interface TestUser {
  username: string;
  password: string;
  expected: LoginResult;
  errorMessage?: string;
}

export type Category = "accessory" | "clothing";

export interface Product {
  name: string;
  price: number;
  category: Category;
}

export function check(
  description: string,
  actual: unknown,
  expected: unknown,
): void {
  const result = actual === expected ? "PASS" : "FAIL";

  console.log(
    `${result} | ${description} | Expected: ${expected} | Actual: ${actual}`,
  );
}
