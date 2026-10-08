export {};

function findUniqueTags(tags: string[]): {
  unique: string[];
  duplicate: number;
} {
  const unique: string[] = [];
  let dup = 0;

  for (const tag of tags) {
    if (!unique.includes(tag)) {
      unique.push(tag);
    } else {
      dup++;
    }
  }

  return {
    unique,
    duplicate: dup,
  };
}

const testCases = [
  {
    input: ["smoke", "login", "smoke", "regression", "login", "checkout"],
    unique: ["smoke", "login", "regression", "checkout"],
    duplicate: 2,
  },
  {
    input: ["smoke", "smoke", "smoke"],
    unique: ["smoke"],
    duplicate: 2,
  },
  {
    input: ["login", "checkout", "regression"],
    unique: ["login", "checkout", "regression"],
    duplicate: 0,
  },
];

for (const { input, unique, duplicate } of testCases) {
  const actual = findUniqueTags(input);

  const uniqueResult =
    JSON.stringify(actual.unique) === JSON.stringify(unique) ? "PASS" : "FAIL";

  const duplicateResult = actual.duplicate === duplicate ? "PASS" : "FAIL";

  console.log(
    `Unique - "${input.join(", ")}": ${uniqueResult} (Expected: ${JSON.stringify(unique)}, Actual: ${JSON.stringify(actual.unique)})`,
  );

  console.log(
    `Duplicate - "${input.join(", ")}": ${duplicateResult} (Expected: ${duplicate}, Actual: ${actual.duplicate})`,
  );
}
