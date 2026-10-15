Exercise 21: CSS Selector Cheat Sheet

Site: https://www.saucedemo.com/

Login: standard_user / secret_sauce

#	Element	CSS selector	Matches	Stability
1	Username field	[data-test="username"]	1	🟢 Dedicated test attribute
2	Password field	[data-test="password"]	1	🟢 Dedicated test attribute
3	Login button	[data-test="login-button"]	1	🟢 Dedicated test attribute
4	Login error message	[data-test="error"]	1	🟢 Dedicated test attribute
5	Every input on the login page	input	3	🟡 Depends on the page's input elements
6	Every product card	.inventory_item	6	🟡 Class could change during redesign
7	Every product name	.inventory_item_name	6	🟡 Depends on the CSS class
8	Every product price	.inventory_item_price	6	🟡 Depends on the CSS class
9	Every Add to cart button	[data-test^="add-to-cart"]	6	🟢 Dedicated test attribute prefix
10	Backpack's Add to cart button	[data-test="add-to-cart-sauce-labs-backpack"]	1	🟢 Exact test attribute
11	Add to cart buttons whose attribute contains t-shirt	button[data-test*="t-shirt"]	2	🟡 Depends on attribute naming
12	Third product's name	.inventory_item:nth-child(3) .inventory_item_name	1	🔴 Depends on product order
13	Cart icon link	.shopping_cart_link	1	🟡 Depends on the CSS class
14	Cart badge number	.shopping_cart_badge	1	🟡 Only appears when the cart has items
15	Sort dropdown	select[data-test="product-sort-container"]	1	🟢 Dedicated test attribute
16	Burger menu button	#react-burger-menu-btn	1	🟢 Unique ID
17	Logout link	#logout_sidebar_link	1	🟢 Unique ID; menu must be open
18	Every product image	.inventory_item_img img	6	🟡 Depends on the CSS classes
19	Backpack's Remove button	[data-test="remove-sauce-labs-backpack"]	1	🟢 Exact test attribute
20	Product whose name is “Sauce Labs Onesie”	.inventory_item_name	6	🔴 Matches all names, not just Onesie
#20: The trick question

Standard CSS selectors cannot select an element based solely on its text content. CSS does not have a standard :contains("Sauce Labs Onesie") selector.

The selector .inventory_item_name matches all six product names, so it does not uniquely identify Sauce Labs Onesie.

To locate that exact product, inspect its markup and use a unique attribute if available. Alternatively, use JavaScript to find the element by its textContent. The important lesson is that selecting by text is not the same as selecting by a CSS attribute or class.

Reflection

Which selector is the most fragile, and why?

Selector #12, .inventory_item:nth-child(3) .inventory_item_name, is especially fragile because it depends on the product's position. If the products are reordered or another element is inserted, it may select a different product.

Did any element have no data-test attribute? What did you use instead?

Some elements, such as product cards, prices, images, and the cart link, can be located using CSS classes. Unique IDs are useful for elements such as the burger menu and Logout link. Prefer dedicated test attributes when available.

Bonus: A second selector for the Backpack button
.inventory_item:has(#item_4_title) button[data-test^="add-to-cart"]


This uses :has() to locate the product card containing the Backpack's title element, then selects its Add to cart button. Verify that the title ID is item_4_title in DevTools.

Which is more stable? The exact selector from #10 is generally more stable:

[data-test="add-to-cart-sauce-labs-backpack"]


It targets the button directly using its dedicated test attribute, whereas the bonus selector depends on the product title's ID, the card structure, and support for :has().