export {};

type Category = "accessory" | "clothing";

interface Product {
  name: string;
  price: number;
  category: Category;
}

const products: Product[] = [
  { name: "Sauce Labs Backpack", price: 29.99, category: "accessory" },
  { name: "Sauce Labs Bike Light", price: 9.99, category: "accessory" },
  { name: "Sauce Labs Bolt T-Shirt", price: 15.99, category: "clothing" },
  { name: "Sauce Labs Fleece Jacket", price: 49.99, category: "clothing" },
  { name: "Sauce Labs Onesie", price: 7.99, category: "clothing" },
  {
    name: "Test.allTheThings() T-Shirt (Red)",
    price: 15.99,
    category: "clothing",
  },
];

// 1. All prices
const allPrices = products.map((p) => p.price);
console.log(allPrices);

// 2. How many cost under $20
const under20 = products.filter((p) => p.price < 20);
console.log(under20.length); // 4

// 3. How many are clothing
const clothingCount = products.filter((p) => p.category === "clothing").length;
console.log(clothingCount); // 4

// 4. The Onesie's price
const onesie = products.find((p) => p.name === "Sauce Labs Onesie");
if (onesie !== undefined) {
  console.log(onesie.price); // 7.99
}

// 5. Find Sauce Labs Hat
const hat = products.find((p) => p.name === "Sauce Labs Hat");
console.log(hat); // undefined

// 6. Total of all prices, rounded to 2 decimals
const total = products.reduce((sum, p) => sum + p.price, 0);
console.log(Number(total.toFixed(2))); // 129.94

// 7. Names of clothing under $20
const cheapClothes = products
  .filter((p) => p.category === "clothing")
  .filter((p) => p.price < 20)
  .map((p) => p.name)
  .join(", ");
console.log(cheapClothes);

// 8. Do all products have a price above 0?
const allPositive = products.every((p) => p.price > 0);
console.log(allPositive); // true

// 9. Is any product over $40?
const anyOver40 = products.some((p) => p.price > 40);
console.log(anyOver40); // true

// BONUS 1. Most expensive product
const mostExpensive = products.reduce((max, p) =>
  p.price > max.price ? p : max,
);
console.log(mostExpensive.name); // Sauce Labs Fleece Jacket

// BONUS 2. Sort products by price (low to high)
const sortedNames = [...products]
  .sort((a, b) => a.price - b.price)
  .map((p) => p.name);

console.log(sortedNames);
console.log(sortedNames[0]); // Sauce Labs Onesie
console.log(sortedNames[sortedNames.length - 1]); // Sauce Labs Fleece Jacket


