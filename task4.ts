function charFrequency(str: string): { [key: string]: number } {
  let symbolsNum: { [key: string]: number } = {};
  for (let i = 0; i < str.length; i++) {
    symbolsNum[str[i]] ? symbolsNum[str[i]]++ : (symbolsNum[str[i]] = 1);
  }
  return symbolsNum;
}

console.log(charFrequency("banana"));
