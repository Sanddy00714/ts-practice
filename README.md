# ts-practice

My Week 1 TypeScript practice on the way from manual QA to automation testing with Playwright. Every exercise is written as a function with its own PASS/FAIL tests.

## Tech used

- TypeScript
- Node.js
- tsx (runs TypeScript files directly)
- Git and GitHub

## How to run

```bash
npm install
npm run check
npx tsx exercises/ex01-reverse-string.ts
```

- `npm run check` checks every file for type errors (`tsc --noEmit`).
- `npx tsx <file>` runs one exercise and prints its PASS/FAIL results.

## Project structure

```
exercises/   the 10 exercises, plus a bug hunt and extras
notes/       my daily practice notes from Days 2 to 4
hello.ts     my first TypeScript program
```

## Exercises

| # | File | What it does | Concepts practised |
|---|------|--------------|--------------------|
| 1 | ex01-reverse-string.ts | Reverses a string | for loop counting backwards, functions |
| 2 | ex02-vowel-count.ts | Counts vowels and consonants | for...of, one job per function |
| 3 | ex03-fizzbuzz.ts | Fizz/Buzz/FizzBuzz for numbers | modulo %, order of conditions, reusing a function |
| 4 | ex04-largest-number.ts | Finds the largest number | -Infinity as a starting value, edge cases |
| 5 | ex05-remove-duplicates.ts | Removes duplicate tags and counts them | arrays, returning an object, comparing arrays |
| 6 | ex06-palindrome.ts | Checks if text reads the same backwards | reusing functions, toLowerCase, replaceAll |
| 7 | ex07-factorial.ts | Calculates n! | loops, throw for invalid input |
| 8 | ex08-word-counter.ts | Counts words in a sentence | split, empty-string edge cases, default parameters |
| 9 | ex09-anagram.ts | Checks if two words are anagrams | sort, join, normalising input |
| 10 | ex10-sum-of-digits.ts | Adds up the digits of a number | % 10, Math.floor, while loop |

Extra: `bug-hunt.ts` contains 8 TypeScript errors that I fixed, with a comment on each line explaining the error code and the fix.

## Bugs I found and fixed

- **A stray semicolon:** `else (char !== " "); { ... }` ran fine but counted 34 consonants instead of 20. The `;` ended the `else`, so the block ran every time.
- **A test that passed by luck:** my smallest-number code always returned the last item. It "passed" only because the test array happened to end with the smallest number. A second test array exposed it.
- **A hidden space:** starting a reversed string with `" "` instead of `""` made every palindrome check fail.
- **Missing cleanup:** my anagram check failed for "Listen / Silent" and "Dormitory / dirty room" until I lowercased the text and removed spaces before sorting.
- **A wrong expected value:** a test failed with 21 vs 20 consonants. The code was right; the test data was wrong. I counted the letters by hand to prove it.
- **A case-sensitive typo:** `shouldlogin` vs `shouldLogin` printed `undefined` without crashing.

## What I learned in Week 1

- "No errors" doesn't mean "correct". Only comparing actual results with expected results proves that code works.
- One test input can pass by luck. Edge cases (negative numbers, empty strings, extra spaces) are where bugs hide.
- When a test fails, check both the code and the expected value before changing anything, and never weaken test data to make a test pass.
- `npx tsx` runs code without checking types; `npx tsc --noEmit` checks them. I never silence errors with `any`, `!` or `@ts-ignore`.
- In Git, a commit saves on my laptop and a push sends it to GitHub. `git add .` only stages the folder I'm in, so I run Git from the project root.

## Next

Playwright with TypeScript, starting 18 October 2026.

## Bug

Suprise to see when type undefine error can be easily by passed. This is the one think I learned.