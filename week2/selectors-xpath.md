# XPath Selector Cheat Sheet: Sauce Demo

Site: https://www.saucedemo.com (login: standard_user / secret_sauce)

Tested in Chrome DevTools: Elements → Ctrl + F, checking the count and the highlight for each.

| # | Element | XPath | Matches | Notes |
|---|---------|-------|---------|-------|
| 1 | Username field | `//*[@data-test='username']` | 1 | `*` = any tag; `//input[...]` is stricter |
| 2 | Login button | `//*[@data-test='login-button']` | 1 | It's an `input`, not a `button` |
| 3 | Error message | `//h3[contains(., 'Epic sadface')]` | 1 | `//*[...]` matches every parent too, so pick the specific tag `h3` |
| 4 | Every product card | `//div[@data-test='inventory-item']` | 6 | |
| 5 | Every product name | `//div[@data-test='inventory-item-name']` | 6 | |
| 6 | Every Add to cart button | `//button[text()='Add to cart']` | 6, then 5 after adding the Backpack | The text changes to "Remove" |
| 7 | Sauce Labs Onesie (by text) | `//div[text()='Sauce Labs Onesie']` | 1 | Impossible with CSS (#20 on the CSS sheet) |
| 8 | Product names containing T-Shirt | `//div[@data-test='inventory-item-name' and contains(., 'T-Shirt')]` | 2 | `and` combines two conditions |
| 9 | Onesie's Add to cart button | `//div[text()='Sauce Labs Onesie']/ancestor::div[@data-test='inventory-item']//button` | 1 | Find by name → up to the card → down to the button |
| 10 | Bike Light's price | `//div[text()='Sauce Labs Bike Light']/ancestor::div[@data-test='inventory-item']//div[@data-test='inventory-item-price']` | 1 | Verified: the neighbouring button belongs to the Bike Light |
| 11 | Third product card overall | `(//div[@data-test='inventory-item'])[3]` | 1 | Brackets = 3rd result on the whole page |
| 12 | Logout link (menu open) | `//a[text()='Logout']` | 1 | |

## Experiment: #6 after clicking Add to cart

After clicking Add to cart on the Backpack, the count becomes 5 instead of 6. This is because the button text changes from "Add to cart" to "Remove". The XPath only finds buttons with the exact text "Add to cart", so it no longer counts the Backpack button. This teaches me that text-based locators can change depending on what happens on the page.

## #9: XPath with ancestor vs data-test

| | A: `ancestor` XPath | B: `[data-test="add-to-cart-sauce-labs-onesie"]` |
|---|---|---|
| Advantage | Finds the button by the product name, so it's clear which product it belongs to. Still works after clicking, because it finds any button in the card. | Shorter, and finds the button directly by its test attribute. Still works if the product's display name changes, as long as the attribute stays the same. |
| Weakness | Stops working if the product name changes. | Stops working after clicking: the `data-test` changes from `add-to-cart-...` to `remove-...`. |

**Correction to my first answer:** I thought both locators would still work after clicking. But the `data-test` changes too, so B finds 0 matches after the click, while A still works.

## What I learned

- XPath can find elements by visible text and climb up to parents, which CSS can't do.
- `contains(., '...')` with `*` matches every parent element too, so choose a specific tag.
- The most useful pattern: find by name → climb up to the card → go down to the element.
- Always check a locator before and after an action: both text and attributes can change.
- A locator only finds elements on the page you're currently on (`//input` gives 0 on the products page).