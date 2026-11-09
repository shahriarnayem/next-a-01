# Type Narrowing in TypeScript: Making Union Types Safer

One useful feature of TypeScript is type narrowing. It help developers work safely with value that may have more than one possible types. Instead of treating a value as uncertain throughout a function, TypeScript can narrow it to a more specific type after checking it.

Imagine a function that accepts either a string or a number. If the value is a string, the application might need to remove extra spaces and change the text to lowercase. If it is a number, the function might perform a calculation. TypeScript's type narrowing allows the function to handle each case correctly.

The `typeof` operator is commonly used for checking basic types such as strings, numbers, and booleans. After a suitable check, TypeScript understands which type is being handled and provide the relevant methods and operations.

For class instances, `instanceof` is useful. It checks whether an object was created from a particular class. This can help when a function receives different kinds of class-based objects and needs to respond differently to each one.

The `in` operator provide another approach. It check whether a property exist in an object. This is especially helpful when working with different object structures that share some similarities but contain different properties.

These checks are more than simple conditions. They help TypeScript understand what a value can safely do at a particular point in the program. Without proper narrowing, developers may need extra type assertions, which can make code less reliable.

I find type narrowing especially useful when handling user input and functions that accept multiple types. It makes codebase safer when keeping the code readable. By learning `typeof`, `instanceof`, and `in`, developers can take better advantage of TypeScript's type system.
