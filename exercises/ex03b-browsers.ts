export{};

const browsers = ["chromium", "firefox", "webkit"];
const upper: string[] = [];

for (const browser of browsers) {
    upper.push(browser.toUpperCase());
}

console.log(upper.join(" + "));