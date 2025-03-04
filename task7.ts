interface GroupedNums {
  [key: number]: number;
}

let numbers = [3, 1, 2, 2, 3, 3, 4];

function groupByFrequency(arr: number[]): GroupedNums {
  let groupedNums: GroupedNums = {};
  for (let i = 0; i < arr.length; i++) {
    groupedNums[arr[i]] ? groupedNums[arr[i]]++ : (groupedNums[arr[i]] = 1);
  }
  return groupedNums;
}

console.log(groupByFrequency(numbers));
