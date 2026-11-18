
export {};

import { check } from "../../week2/helpers.js";

type Status = "passed" | "failed" | "skipped";

interface TestResult {
  name: string;
  status: Status;
  durationMs: number;
}

const results: TestResult[] = [
  { name: "login works", status: "passed", durationMs: 1200 },
  { name: "add to cart", status: "passed", durationMs: 2300 },
  { name: "checkout", status: "failed", durationMs: 5400 },
  { name: "logout", status: "passed", durationMs: 800 },
  { name: "sort by price", status: "skipped", durationMs: 0 },
  { name: "locked user error", status: "failed", durationMs: 1500 },
];

// 1. Count tests by status
function countByStatus(
  results: TestResult[],
  status: Status
): number {
  return results.filter((test) => test.status === status).length;
}

// 2. Calculate total duration
function totalDuration(results: TestResult[]): number {
  return results.reduce((sum, test) => sum + test.durationMs, 0);
}

// 3. Get names of failed tests
function failedNames(results: TestResult[]): string {
  return results
    .filter((test) => test.status === "failed")
    .map((test) => test.name)
    .join(", ");
}

// 4. Find the slowest test
function slowestTest(results: TestResult[]): string | undefined {
  const slowest = results.reduce((winner, current) =>
    current.durationMs > winner.durationMs ? current : winner
  );

  return slowest?.name;
}

// BONUS: Calculate pass rate
function passRate(results: TestResult[]): number {
  const passed = countByStatus(results, "passed");
  const skipped = countByStatus(results, "skipped");
  const total = results.length;

  return (passed / (total - skipped)) * 100;
}


// TESTS
check("3 passed tests", countByStatus(results, "passed"), 3);

check("2 failed tests", countByStatus(results, "failed"), 2);

check("1 skipped test", countByStatus(results, "skipped"), 1);

check("Total duration", totalDuration(results), 11200);

check(
  "Failed test names",
  failedNames(results),
  "checkout, locked user error"
);

check("Slowest test", slowestTest(results), "checkout");

check("Pass rate", passRate(results), 60);
