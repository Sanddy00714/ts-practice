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

const tags = ["smoke", "login", "smoke", "regression", "login", "checkout"];

const result = findUniqueTags(tags);

console.log(result.unique);
console.log(`Duplicate: ${result.duplicate}`);
console.log(`Check: ${tags.length - result.unique.length}`);
