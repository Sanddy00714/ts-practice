function check(
  description: string,
  actual: unknown,
  expected: unknown
) {
  const result = actual === expected ? "PASS" : "FAIL";
  console.log(
    `${result} | ${description} | Expected: ${expected} | Actual: ${actual}`
  );
}

async function main() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
      }),
    }
  );

  const body = await response.json();

  check("Status", response.status, 201);
  check("Name", body.name, "Test User");
  check("Email", body.email, "test@example.com");
  check("ID exists", typeof body.id, "number");
}

main();