
# SauceDemo Checkout Locators

## Checkout Form Elements

| # | Element | CSS Selector | XPath | Expected Count |
|---|---|---|---|---|
| 1 | First Name | `input[data-test="firstName"]` | `//input[@data-test='firstName']` | 1 |
| 2 | Last Name | `input[data-test="lastName"]` | `//input[@data-test='lastName']` | 1 |
| 3 | Postal Code | `input[data-test="postalCode"]` | `//input[@data-test='postalCode']` | 1 |
| 4 | Continue Button | `input[data-test="continue"]` | `//input[@data-test='continue']` | 1 |
| 5 | Error Message | `h3[data-test="error"]` | `//h3[@data-test='error']` | 1 |

## Verification

- First Name: Verified
- Last Name: Verified
- Postal Code: Verified
- Continue Button: Verified
- Error Message: Verified

## Notes

- CSS selectors use data-test attributes.
- XPath selectors use attribute matching.
- All elements should return a count of 1.
- Error message appears after clicking Continue with empty fields.
