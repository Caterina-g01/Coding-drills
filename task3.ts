interface Product {
  id: number;
  name: string;
  price: number;
}

const products = [
  { id: 1, name: "Milk", price: 1.2 },
  { id: 2, name: "Bread", price: 0.8 },
  { id: 3, name: "Cheese", price: 2.5 },
];

function getProductNames(array: Product[]) {
  return array.map((item) => item.name);
}
console.log(getProductNames(products));
