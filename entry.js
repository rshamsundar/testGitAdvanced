const _doSomeStuff = require('./do-some-stuff');
const myFunction = () => {
  console.log('This is just a sample function');
  const params = {
    name: 'Name',
    place: 'Place',
    animal: 'Animal',
    thing: 'Thing'
  }
  const doSomeStuff = _doSomeStuff();
  doSomeStuff(params);
};