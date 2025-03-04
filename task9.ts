const numbers = [1, 2, 3, 4, 5];

const newNums = numbers.map((current) => {
  return (current += 10);
});

const filtredNums = newNums.filter((current) => {
  return current % 2 === 0;
});

console.log(filtredNums);
