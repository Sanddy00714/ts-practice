export {};

type LoginResult = "success" | "locked" | "error";

interface TestUser {
  username: string;
  password: string;
  expected: LoginResult;
  errorMessage?: string;
}

const testUsers: TestUser[] = [
  {
    username: "standard_user",
    password: "secret_sauce",
    expected: "success",
  },
  {
    username: "locked_out_user",
    password: "secret_sauce",
    expected: "locked",
    errorMessage: "Epic sadface: Sorry, this user has been locked out.",
  },
  {
    username: "problem_user",
    password: "secret_sauce",
    expected: "success",
  },
  {
    username: "standard_user",
    password: "wrong_password",
    expected: "error",
    errorMessage:
      "Epic sadface: Username and password do not match any user in this service",
  },
];

function filterByResult(users: TestUser[], result: LoginResult): TestUser[] {
  const filteredUsers: TestUser[] = [];

  for (const user of users) {
    if (user.expected === result) {
      filteredUsers.push(user);
    }
  }

  return filteredUsers;
}

function describeUser(user: TestUser): string {
  if (user.errorMessage !== undefined) {
    return `${user.username} → ${user.expected} (${user.errorMessage})`;
  }

  return `${user.username} → ${user.expected}`;
}

function check(description: string, actual: unknown, expected: unknown): void {
  const result = actual === expected ? "PASS" : "FAIL";
  console.log(
    `${result} | ${description} | Expected: ${expected} | Actual: ${actual}`,
  );
}

// Errors found: TS2322 (value not in LoginResult), TS2353 (extra property not in TestUser)
check("Success users", filterByResult(testUsers, "success").length, 2);
check("Locked users", filterByResult(testUsers, "locked").length, 1);
check("Error users", filterByResult(testUsers, "error").length, 1);

const firstUser = testUsers[0];
if (firstUser !== undefined) {
  check(
    "Describe first user",
    describeUser(firstUser),
    "standard_user → success",
  );
}

console.log(filterByResult(testUsers, "success").length); // 2
console.log(filterByResult(testUsers, "locked").length); // 1
console.log(filterByResult(testUsers, "error").length); // 1
