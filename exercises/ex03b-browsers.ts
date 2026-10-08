export {};

function words(): string[] {
  const browsers = ["chromium", "firefox", "webkit"];
  const upper: string[] = [];

  for (const browser of browsers) {
    upper.push(browser.toUpperCase());
  }

  return upper;
}
console.log(words());
