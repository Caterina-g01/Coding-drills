const obj1 = {
  name: "Alice",
  details: {
    age: 25,
    address: {
      city: "New York",
      zip: 10001,
    },
  },
};

const obj2 = {
  name: "Alice",
  details: {
    age: 25,
    address: {
      city: "New York",
      zip: 10001,
    },
  },
};

interface Person {
  name: string;
  details: Details;
}

interface Details {
  age: number;
  address: Address;
}

interface Address {
  city: string;
  zip: number;
}

function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (deepEqual(obj1[key], obj2[key]) === false) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual(obj1, obj2));
