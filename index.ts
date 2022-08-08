//Cannot redeclare block scoped 
// Use TypeScript modules, and add an empty export{}:
export { };
function greet(name?: string) {
  console.log(`Hello, ${name || 'Anonymous'}!`);
}

greet(); // Prints: Hello, Anonymous!

const createArrowGreeting = (name?: string): string => {
  if (name) {
    return `Hello, ${name}!`;
  }

  return "undefined";
  // Typescript Error: Type 'undefined' is not assignable to type 'string'.
}

createArrowGreeting("hello")