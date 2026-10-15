import { check } from "./helpers.js";

check("Addition works", 1 + 1, 2);
check("String matches", "hello", "hello");
check("Boolean check", true, true);
check("Incorrect result example", 5, 10);
