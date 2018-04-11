
module.exports = () => {
  return (words) => {
    const checkIfTwoWordsSame = (firstWord, secondWord) => {
      const firstWordArr = Array.sort(firstWord.split(''));
      const secondWordArr = Array.sort(secondWord.split(''));

      return firstWordArr === secondWordArr;
      
    };

    checkIfTwoWordsSame(words[0], words[1]);

  };
}