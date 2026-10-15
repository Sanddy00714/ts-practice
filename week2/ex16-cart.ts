export {};

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

class Cart {
  private items: CartItem[] = [];

  // Rewrite using find()
  addItem(name: string, price: number, quantity: number = 1): void {
    const existingItem = this.items.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ name, price, quantity });
    }
  }

  // Rewrite using reduce()
  getItemCount(): number {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  getLineCount(): number {
    return this.items.length;
  }

  // Rewrite using filter()
  removeItem(name: string): void {
    this.items = this.items.filter((item) => item.name !== name);
  }

  // Rewrite using reduce(), keeping the rounding
  getTotal(): number {
    const totalAmount = this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    return Math.round(totalAmount * 100) / 100;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }
}

function check(description: string, actual: unknown, expected: unknown): void {
  const result = actual === expected ? "PASS" : "FAIL";
  console.log(
    `${result} | ${description} | Expected: ${expected} | Actual: ${actual}`,
  );
}

const emptyCart = new Cart();

check("New cart: isEmpty()", emptyCart.isEmpty(), true);
check("New cart: getItemCount()", emptyCart.getItemCount(), 0);
check("New cart: getTotal()", emptyCart.getTotal(), 0);

const shoppingCart = new Cart();

shoppingCart.addItem("Sauce Labs Backpack", 29.99);
shoppingCart.addItem("Sauce Labs Bike Light", 9.99, 2);
check("Count after adding", shoppingCart.getItemCount(), 3);
check("Lines after adding", shoppingCart.getLineCount(), 2);
check("Total after adding", shoppingCart.getTotal(), 49.97);

shoppingCart.addItem("Sauce Labs Backpack", 29.99);
check("Count after adding backpack again", shoppingCart.getItemCount(), 4);
check("Lines: still no duplicate line", shoppingCart.getLineCount(), 2);

shoppingCart.removeItem("Sauce Labs Bike Light");
check("Count after removing", shoppingCart.getItemCount(), 2);
check("Lines after removing", shoppingCart.getLineCount(), 1);

const cart = new Cart();

cart.addItem("Sauce Labs Backpack", 29.99);
check("Before clear(): isEmpty()", cart.isEmpty(), false);
cart.clear();
check("After clear(): isEmpty()", cart.isEmpty(), true);

const secondCart = new Cart();

secondCart.addItem("Sauce Labs Backpack", 29.99);
secondCart.addItem("Sauce Labs Bike Light", 9.99);
secondCart.addItem("Sauce Labs Bolt T-Shirt", 15.99);
secondCart.addItem("Sauce Labs Fleece Jacket", 49.99);

check("Step 4: secondCart.getTotal()", secondCart.getTotal(), 105.96);

check("shoppingCart unaffected by secondCart", shoppingCart.getItemCount(), 2);
