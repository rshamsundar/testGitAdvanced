
module.exports = () => {
<<<<<<< HEAD
  return (words) => {
    const checkIfTwoWordsSame = (firstWord, secondWord) => {
      const firstWordArr = Array.sort(firstWord.split(''));
      const secondWordArr = Array.sort(secondWord.split(''));

      return firstWordArr === secondWordArr;
      
    };

    checkIfTwoWordsSame(words[0], words[1]);

=======
  const result = [];
  const checkIfSame = (first, second) => {
    const firstArr = Array.sort(first.split(''));
    const secondArr = Array.sort(second.split(''));

    if(firstArr === secondArr){
      console.log('Same letters in both words');
    }
    else {
      console.log('Different letters in words');
    }
  };
  return (words) => {
      checkIfSame(words[0], words[1]);
>>>>>>> Changed some implementation to find words that have same letters
  };
}