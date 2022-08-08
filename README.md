## Parameter Type Annotations
In TypeScript, function parameters may be given type annotations with the same syntax as variable declarations: a colon next to the name.

Parameters that we do not provide type annotations for are assumed to be of type any—the same way variables are.

```
function printKeyValue(key: string, value) {
  console.log(`${key}: ${value}`);
}
 
printKeyValue('Courage', 1337); // Prints: Courage: 1337
printKeyValue('Mood', 'scared'); // Prints: Mood: scared
```

---
## Optional Parameters

TypeScript normally gives an error if we don’t provide a value for all arguments in a function. This isn’t always desirable; sometimes we’d like to skip providing values.

To indicate that a parameter is intentionally optional, we add a ? after its name. This tells TypeScript that the parameter is allowed to be undefined and doesn’t always have to be provided.

```
function greet(name?: string) {
  console.log(`Hello, ${name|| 'Anonymous'}!`);
}
 
greet(); // Prints: Hello, Anonymous!
```
---
## Default Parameters
If a parameter is assigned a default value, TypeScript will infer the variable type to be the same as the default value’s type. (This is similar to how TypeScript infers the type of an initialized variable to be the same as the type of its initial value.)

```
function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}
```

---
## Inferring Return Types
TypeScript can also infer the types of values returned by functions. It does this by looking at the types of the values after a function’s return statements.

```
function createGreeting(name: string) {
  return `Hello, ${name}!`;
}
 
const myGreeting = createGreeting('Aisle Nevertell');
```

---
## Explicit Return Types
If we’d like to be explicit about what type a function returns, we can add an explicit type annotation after its closing parenthesis. Here, we use the same syntax as other type annotations, a colon followed by the type. TypeScript will produce an error for any return statement in that function that doesn’t return the right type of value.

```
const createArrowGreeting = (name?: string): string => {
    if (name) {
        return `Hello, ${name}!`;
    }
 
    return undefined;
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
}
```

---
## Void Return Type
The function logGreeting() simply logs a greeting to the console. There is no returned value, so we must treat the return type as void. A proper type annotation for this function would look like this:

```
function logGreeting(name:string): void{
  console.log(`Hello, ${name}!`)
}
```
---
## Documenting Functions
TypeScript recognizes JavaScript comment syntax:

// This is a single line comment 
```
// This is a single line comment 
 
/*
This is a 
multiline
comment
*/


 /**
 * This is a documentation comment
   * Returns the sum of two numbers.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The sum of `x` and `y`
   *
   */
  function getSum(x: number, y: number): number {
    return x + y;
  }
}

```
