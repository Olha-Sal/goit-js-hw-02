const findLongestWord = function(string) {
  let words = string.split(' ');
  let max = 0;
  let longestWord;

  for(word of words) {
    let leng = word.length;
    if (leng > max) {
      max = leng;
      longestWord = word;
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you'));