async function getStatus(url: string): Promise<number> {
  const response = await fetch(url);
  return response.status;
}

async function testStatus() {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const tests = [
    { path: "/users/1", expected: 200 },
    { path: "/posts/1", expected: 200 },
    { path: "/users/999", expected: 404 },
    { path: "/this-does-not-exist", expected: 404 },
  ];

  for (const test of tests) {
    const actual = await getStatus(baseUrl + test.path);
    const result = actual === test.expected ? "PASS" : "FAIL";

    console.log(
      `${result} | URL: ${test.path} | Expected: ${test.expected} | Actual: ${actual}`
    );
  }
}

testStatus();