export {};

function reverse(text: string): string {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}

for (const word of ["Playwright", "QA", "racecar"]) {
  console.log(`Original: ${word}, Reversed: ${reverse(word)}`);
}
