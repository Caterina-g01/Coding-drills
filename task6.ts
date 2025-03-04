function findLongestWord(sentense: string): string {
  let wordsArray = sentense.split(" ");
  return wordsArray.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, wordsArray[0]);
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
