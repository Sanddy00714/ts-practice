import { readFileSync } from "node:fs";
import { check, type TestUser, type LoginResult } from "./helpers.js";

const text = readFileSync(
  new URL("./data/users.json", import.meta.url),
  "utf-8",
);

const users = JSON.parse(text) as TestUser[];

// 1. Number of users
check("Number of users", users.length, 4);

// 2. Users expecting success
const successfulUsers = users.filter((user) => user.expected === "success");

check("Users expecting success", successfulUsers.length, 2);

// 3. Locked-out user's error message using find + narrowing
const lockedUser = users.find((user) => user.username === "locked_out_user");

const lockedError =
  lockedUser?.expected === "locked" ? lockedUser.errorMessage : undefined;

check(
  "Locked-out user's error message",
  lockedError,
  "Epic sadface: Sorry, this user has been locked out.",
);

// 4. Every user has a non-empty password
const allPasswordsPresent = users.every(
  (user) => user.password.trim().length > 0,
);

check("Every user has a non-empty password", allPasswordsPresent, true);
