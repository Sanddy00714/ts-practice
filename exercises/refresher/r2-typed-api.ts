
export {};

import { check } from "../../week2/helpers.js";

// 1. Define the Todo interface
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// 2. Fetch a Todo from the API
async function getTodo(id: number): Promise<Todo> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const todo: Todo = await response.json();

  return todo;
}

// 3. Main function
async function main(): Promise<void> {
  const todo = await getTodo(1);

  check("Todo ID", todo.id, 1);

  check("Todo completed", todo.completed, false);

  check("Todo title", todo.title, "delectus aut autem");

  // 4. Test error handling
  try {
    await getTodo(999999);

    console.log("FAIL | Expected an error for missing Todo");
  } catch (error) {
    console.log("PASS | 404 is handled as an error");
  }
}

// 5. Run main
main().catch((error) => {
  console.error("Unexpected error:", error);
});
