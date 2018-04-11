module.exports = () => {
  const isWordPalindrome = (word) => {
    const reverseWord = word.split('').reverse().join();
    return word === reverseWord;
  }

  areWordsSame('loyol');
}