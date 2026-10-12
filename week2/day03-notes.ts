export {};

class Counter {
  count: number; // data the object holds (a "property")

  constructor(start: number) {
    // runs ONCE, when you create the object
    this.count = start;
  }

  increment(): void {
    // an action (a "method")
    this.count++;
  }

  getCount(): number {
    return this.count;
  }
}

const clicks = new Counter(0); // build one object from the blueprint
clicks.increment();
clicks.increment();
console.log(clicks.getCount()); // 2

const retires = new Counter(10); // a second seperate object
console.log(retires.getCount()); // 10, it has its own count


class Account {
  private balance = 0;           // only code INSIDE the class can touch this
  readonly owner: string;        // can be set once, in the constructor, then never changed

  constructor(owner: string) {
    this.owner = owner;
  }

  deposit(amount: number): void {
    this.balance += amount;      // ✅ allowed: we're inside the class
  }
}

// const acc = new Account("Sandeep");
// console.log(acc.balance);
// // TS2341: Property 'balance' is private and only accessible within class 'Account'.
// acc.owner = "Someone else";
// // TS2540: Cannot assign to 'owner' because it is a read-only property.

// Long form
class Product {
  name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// Short form: does exactly the same thing
class Product2 {
  constructor(public name: string, private price: number) {}
}

