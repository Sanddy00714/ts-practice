import { readFileSync } from "node:fs";
import { check, type Product, type Category } from "./helpers.js";

const csv = readFileSync(
  new URL("./data/products.csv", import.meta.url),
  "utf-8",
);

const products: Product[] = csv
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((line) => {
    const [name, price, category] = line.split(",");

    return {
      name: name ?? "",
      price: Number(price),
      category: (category ?? "") as Category,
    };
  });

// 1. Check the number of products
check("Number of products", products.length, 6);

// 2. Check products under $20
const under20 = products.filter((p) => p.price < 20);
check("Products under $20", under20.length, 4);

// 3. Check clothing products
const clothing = products.filter((p) => p.category === "clothing");
check("Clothing products", clothing.length, 4);

// 4. Check total price
const total = products.reduce((sum, p) => sum + p.price, 0);
check("Total price", Number(total.toFixed(2)), 129.94);

// 5. Check Onesie price
const onesie = products.find((p) => p.name === "Sauce Labs Onesie");
check("Onesie price", onesie?.price, 7.99);

// Bonus: Check that every price is a real number
const allPricesValid = products.every((p) => !Number.isNaN(p.price));
check("Every price is a real number", allPricesValid, true);
