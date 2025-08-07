const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "admin" },
  { name: "Bob", role: "admin" },
  { name: "Bob", role: "admin" },
];

const onlyAdmins = users.every((user) => user.role === "admin");
console.log(onlyAdmins); // false

// const cart = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];

// const spliced = cart.splice(0, 3);

// console.log("After .splice():");
// console.log("Spliced portion:", spliced);
// console.log("Original cart:", cart);

const cart = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];

// Use .slice() to get a portion
const firstThree = cart.slice(0, 3);

console.log("Original cart:", cart);
console.log("Sliced portion:", firstThree);
