## Task 1: Product Filtering

Write a function that filters products based on given criteria. For example:

```javascript
const filters = { minPrice: 50, maxPrice: 200, category: "electronics" };
```

## Task 2: Comparison of Nested Objects

Write a function that takes two objects and checks if they are equal in content (including nested objects). For example, { a: { b: 2 } } and { a: { b: 2 } } should be considered equal.

## Task 3: Transforming an Array of Objects

```javascript
const products = [
  { id: 1, name: "Milk", price: 1.2 },
  { id: 2, name: "Bread", price: 0.8 },
  { id: 3, name: "Cheese", price: 2.5 },
];
```

Write a function getProductNames(products), which takes an array of objects and returns a new array containing only the product names.

## Task 4: Character Frequency in a String

Write a function charFrequency(str) that takes a string and returns an object where the key is a character and the value is the number of its occurrences in the string.

Example:

```javascript
charFrequency("banana");
```

Expected output:

```javascript
{ b: 1, a: 3, n: 2 }
```
