export {};

const BASE_URL = "https://jsonplaceholder.typicode.com";

function check(description: string, actual: unknown, expected: unknown): void {
  const result = actual === expected ? "PASS" : "FAIL";
  console.log(
    `${result} | ${description} | Expected: ${expected} | Actual: ${actual}`,
  );
}

async function testGetUser(): Promise<void> {
  console.log("--- GET /users/1 ---");
  const start = Date.now();
  const response = await fetch(`${BASE_URL}/users/1`);
  const body = await response.json();
  console.log(`took ${Date.now() - start} ms`);

  check("Status", response.status, 200);
  check("Name", body.name, "Leanne Graham");
  check("Email", body.email, "Sincere@april.biz");
}

async function testCreatePost(): Promise<void> {
  console.log("--- POST /posts ---");
  const newPost = {
    title: "My first API test",
    body: "Testing with fetch",
    userId: 1,
  };

  const start = Date.now();
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  const body = await response.json();
  console.log(`took ${Date.now() - start} ms`);

  check("Status", response.status, 201);
  check("Title", body.title, newPost.title);
  check("Body", body.body, newPost.body);
  check("User ID", body.userId, newPost.userId);
  check("ID is a number", typeof body.id, "number");
}

async function main(): Promise<void> {
  try {
    await testGetUser();
    await testCreatePost();
  } catch (error) {
    console.log("FAIL | Network error:", error);
  }
}

main();
