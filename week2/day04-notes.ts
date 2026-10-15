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

products.filter((product) => product.price < 20);

const names = products.map((product) => product.name);
console.log(names); //// [ 'Sauce Labs Backpack', 'Sauce Labs Bike Light', ... ]   ← 6 names

const cheap = products.filter((product) => product.price < 20);
console.log(cheap.length); // 4

// this.items = (this.items ?? []).filter((item) => item.name !== name); //      "keep every item that ISN'T the one to remove"

const onesie = products.find((product) => product.name === "Sauce Labs Onesie");
console.log(onesie); // { name: 'Sauce Labs Onesie', price: 7.99, ... }

const hat = products.find((product) => product.name === "Sauce Labs Hat");
console.log(hat); // undefined, because there's no hat

if (onesie !== undefined) {
  console.log(onesie.price); // ✅ 7.99
}

console.log(products.every((p) => p.price > 0)); // true: are ALL prices positive?
console.log(products.some((p) => p.price > 40)); // true: is ANY price over 40?

const total = products.reduce((sum, product) => sum + product.price, 0);
console.log(total);   // 129.94

const cheapClothes = products
  .filter((p) => p.category === "clothing")
  .filter((p) => p.price < 20)
  .map((p) => p.name)
  .join(", ");

console.log(cheapClothes);
// Sauce Labs Bolt T-Shirt, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red)