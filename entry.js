const _doSomeStuff = require('./do-some-stuff');
const myFunction = () => {
  console.log('This is just a sample function');
  const doSomeStuff = _doSomeStuff();
  doSomeStuff(['sole', 'lose']);
};