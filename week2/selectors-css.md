# CSS Selector Cheat Sheet: Sauce Demo

Site: https://www.saucedemo.com (login: standard_user / secret_sauce)

| # | Element | CSS selector | Matches | Stability |
|---|---------|--------------|---------|-----------|
| 1 | Username field | `[data-test="username"]` | 1 | 🟢 Test attribute |
| 2 | Password field | `[data-test="password"]` | 1 | 🟢 Test attribute |
| 3 | Login button | `[data-test="login-button"]` | 1 | 🟢 Test attribute (it's an `input`, not a `button`) |
| 4 | Error message | `[data-test="error"]` | 1 | 🟢 Test attribute (not `error-button`, which is the ✖) |
| 5 | Every input on login page | `input` | 3 | 🟡 Tag: breaks if a field is added |
| 6 | Every product card | `[data-test="inventory-item"]` | 6 | 🟢 Test attribute |
| 7 | Every product name | `[data-test="inventory-item-name"]` | 6 | 🟢 Test attribute |
| 8 | Every product price | `[data-test="inventory-item-price"]` | 6 | 🟢 Test attribute |
| 9 | Every Add to cart button | `[data-test^="add-to-cart"]` | 6 | 🟢 Test attribute prefix |
| 10 | Backpack's Add to cart | `[data-test="add-to-cart-sauce-labs-backpack"]` | 1 | 🟢 Exact test attribute |
| 11 | Add to cart buttons for t-shirts | `button[data-test*="t-shirt"]` | 2 | 🟡 Depends on naming in the attribute |
| 12 | Name of the 3rd product | `[data-test="inventory-item"]:nth-child(3) [data-test="inventory-item-name"]` | 1 | 🔴 Position-based: breaks if the order changes |
| 13 | Cart icon link | `[data-test="shopping-cart-link"]` | 1 | 🟢 Test attribute |
| 14 | Cart badge (after adding an item) | `[data-test="shopping-cart-badge"]` | 1 | 🟢 Test attribute, only exists when the cart has items |
| 15 | Sort dropdown | `[data-test="product-sort-container"]` | 1 | 🟢 Test attribute |
| 16 | Burger menu button | `#react-burger-menu-btn` | 1 | 🟢 Unique id |
| 17 | Logout link (menu open) | `#logout_sidebar_link` | 1 | 🟢 Unique id |
| 18 | Every product image | `.inventory_item_img img` | 6 | 🟡 Class-based |
| 19 | Backpack's Remove button | `[data-test="remove-sauce-labs-backpack"]` | 1 | 🟢 Exact test attribute |
| 20 | Product named "Sauce Labs Onesie" | Not possible with CSS | – | CSS can't match visible text. Needs XPath or Playwright's `getByText` |

## What I learned

- Always look for `data-test` first. I found it on product names and prices after first assuming there was only a class.
- Check the highlight, not just the count: `error-button` matched 1, but it was the ✖ button, not the message.
- Classes change with the page's state: the username box got an extra `error` class after a failed login.
- Climb the DOM tree to find the right parent: `inventory-container` (all products) → `inventory-item` (one card) → `inventory-item-desc` (just the text).
- CSS selects by attributes, never by the text between the tags.