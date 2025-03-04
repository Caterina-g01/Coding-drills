const fruits = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "orange" },
];
const fruitToRemove = { id: 2, name: "banana" };

const anotherFruitsArray = fruits.filter((currentFruit) => {
  return currentFruit.id !== fruitToRemove.id;
});
console.log(anotherFruitsArray);
