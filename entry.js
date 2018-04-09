const _doSomeStuff = require('./do-some-stuff');
const _doSomeMoreStuff = require('./do-some-more-stuff');

//WIP WIP WIP WIP WIP
const myFunction = () => {
  console.log('This is just a sample function');
  const params = {
    name: 'Name',
    place: 'Place',
    animal: 'Animal',
    thing: 'Thing'
  }
  const doSomeStuff = _doSomeStuff();
  doSomeStuff(['sole', 'lose']);
  const doSomeMoreStuff = _doSomeMoreStuff();
  doSomeMoreStuff.doit();
  /// This comment is only on the master now
  //MASTER MASTER MASTER
};