import { readFileSync } from "node:fs";
import { check, type TestUser } from "./helpers.js";

const text = readFileSync(
  new URL("./data/users.json", import.meta.url),
  "utf-8",
);

const users = JSON.parse(text) as TestUser[];

console.log("Total users:", users.length);

for (const user of users) {
  console.log(user.username, user.expected);
}

check("Two users loaded", users.length, 2);

const csv = readFileSync(
  new URL("./data/products.csv", import.meta.url),
  "utf-8",
);

const products = csv
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((line) => {
    const [name, price] = line.split(",");

    return {
      name: name ?? "",
      price: Number(price),
    };
  });

console.log("Products:", products);
check("Two products loaded", products.length, 2);
check("First product price", products[0]?.price, 29.99);
