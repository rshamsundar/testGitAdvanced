const _doSomeStuff = require('./do-some-stuff');
const _doSomeMoreStuff = require('./do-some-more-stuff');

const myFunction = () => {
  console.log('This is just a sample function');
  // const words = ['sole', 'nuts', 'lose', 'stun', 'blah' ] 
  const doSomeStuff = _doSomeStuff();
  doSomeStuff(['sole', 'lose']);
  const doSomeMoreStuff = _doSomeMoreStuff();
  doSomeMoreStuff.doit();
  /// This comment is only on the master now
};