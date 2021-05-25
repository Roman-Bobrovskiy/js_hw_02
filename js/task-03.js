const findLongestWord = function (string) {
  let longestWord = 0;
  let word = string.split(" ");
  let result = 0;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i].length > longestWord) {
      longestWord = word[i].length;
      result = word[i];
    }
  }

  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'
