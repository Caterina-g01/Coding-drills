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

## Task 5: Reverse a String

Write a function that takes a string and returns its reversed version. For example, for the string "hello", it should return the string "olleh".

## Task 6: Find the Longest Word

Write a function that takes a string with multiple words and returns the longest word in the string. If there are multiple words with the same length, return the first one. For example, for the string "The quick brown fox jumps over the lazy dog", it should return the string "quick".

## Task 7: Group Elements by Frequency

Write a function that takes an array of numbers and returns an object where the keys are the numbers and the values are the count of their occurrences in the array. Then, sort the object by the frequency of the numbers in descending order. For example, for the array [3, 1, 2, 2, 3, 3, 4], the result should be:

```javascript
{ 3: 3, 2: 2, 1: 1, 4: 1 }
```

## Task 8: String Permutations

Write a function that generates all possible permutations of a string (including duplicates) and returns them as an array. For example, for the string "abc", the result should be:

```javascript
["abc", "acb", "bac", "bca", "cab", "cba"];
```

## Task 9: map() and filter()

```javascript
const numbers = [1, 2, 3, 4, 5];
```

Create a new array where all numbers are increased by 10.
Create a new array where only even numbers are included.

## Task 10: Update Task Title Based on ID

You have an array of tasks. Iterate through the array and if a task has an id of 20, change its title to "Read a book".

## Task 11: Move Task from Backlog to In-Progress

Move the task with id 101 from the backlog array to the inProgress array.
Show two new arrays: newBacklog and newInProgress.

## Task 12: Remove Specific Item from an Array

You have an array of fruits. You need to remove a specific fruit (e.g., the one with id 2) from the array and create a new array.
