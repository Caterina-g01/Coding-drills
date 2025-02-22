const products = [
  { id: 1, name: "Laptop", price: 1200, category: "electronics", rating: 4.5 },
  { id: 2, name: "Phone", price: 800, category: "electronics", rating: 4.7 },
  {
    id: 3,
    name: "Headphones",
    price: 150,
    category: "electronics",
    rating: 4.2,
  },
  { id: 4, name: "T-shirt", price: 25, category: "clothing", rating: 4.0 },
  { id: 5, name: "Jeans", price: 60, category: "clothing", rating: 4.3 },
  {
    id: 6,
    name: "Blender",
    price: 90,
    category: "home_appliances",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Vacuum Cleaner",
    price: 200,
    category: "home_appliances",
    rating: 4.8,
  },
  { id: 8, name: "Notebook", price: 5, category: "stationery", rating: 4.1 },
  { id: 9, name: "Backpack", price: 50, category: "electronics", rating: 4.4 },
  { id: 10, name: "Watch", price: 250, category: "accessories", rating: 4.5 },
];

function filterProducts(array) {
  interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    rating: number;
  }

  function filterProducts(array: Product[]): Product[] {
    return array.filter(
      (item) =>
        item.price >= 50 && item.price <= 200 && item.category === "electronics"
    );
  }
}

console.log(filterProducts(products));
