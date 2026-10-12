export {};

interface Address {
  city: string;
  zipcode: string;
}

interface Company {
  name: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
  company: Company;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// Fetch one user
async function getUser(id: number): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.status}`);
  }

  const user: User = await response.json();
  return user;
}

// Fetch posts by user
async function getPostsByUser(userId: number): Promise<Post[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`);
  }

  const posts: Post[] = await response.json();
  return posts;
}

// Fetch comments by post
async function getCommentsByPost(postId: number): Promise<Comment[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch comments: ${response.status}`);
  }

  const comments: Comment[] = await response.json();
  return comments;
}

// Check helper
function check(description: string, actual: unknown, expected: unknown): void {
  if (actual === expected) {
    console.log(`PASS: ${description}`);
  } else {
    console.log(`FAIL: ${description} — expected ${expected}, got ${actual}`);
  }
}

// Run tests
async function main(): Promise<void> {
  const user = await getUser(1);
  const posts = await getPostsByUser(1);
  const comments = await getCommentsByPost(1);

  // User checks
  check("User name", user.name, "Leanne Graham");
  check("User city", user.address.city, "Gwenborough");
  check("User company", user.company.name, "Romaguera-Crona");

  // Intentionally misspelled property for Step 4:
  //   console.log(user.adress.city);
  // TypeScript should report an error because "adress" does not exist.

  // Post checks
  check("Post count", posts.length, 10);

  let matchingPosts = 0;

  for (const post of posts) {
    if (post.userId === 1) {
      matchingPosts++;
    }
  }

  check("Posts belonging to user 1", matchingPosts, 10);

  // Bonus: comment checks
  check("Comment count", comments.length, 5);

  let matchingComments = 0;

  for (const comment of comments) {
    if (comment.postId === 1) {
      matchingComments++;
    }
  }

  check("Comments belonging to post 1", matchingComments, 5);
}

main().catch((error: unknown) => {
  console.error("Test run failed:", error);
});
