module.exports = () =>{ 
  const result = [];
  const isDuplicate = (first, second) {

  }

  const nums = [1,2,3,1,3,4];

  nums.forEach(num => {
    nums.forEach (dupe => {
      isDuplicate(num, dupe) && !result.includes(num) ? result.push(num): null;
    });
  });

  console.log(result);
}