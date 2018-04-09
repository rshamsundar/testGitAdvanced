
module.exports = () => {
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
  };
}
