export{};

async function main() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  console.log(
    `${response.status === 200 ? "PASS" : "FAIL"} | Status | Expected: 200 | Actual: ${response.status}`
  );

  const body = await response.json();

  console.log(
    `${body.name === "Leanne Graham" ? "PASS" : "FAIL"} | Name | Expected: Leanne Graham | Actual: ${body.name}`
  );

  console.log(
    `${body.email === "Sincere@april.biz" ? "PASS" : "FAIL"} | Email | Expected: Sincere@april.biz | Actual: ${body.email}`
  );
}

main();