const _doSomeStuff = require('./do-some-stuff');
//WIP WIP WIP WIP WIP
const myFunction = () => {
  console.log('This is just a sample function');
  const params = {
    bucket: 'Bucket',
    key: 'Key',
  }
  const doSomeStuff = _doSomeStuff();
  doSomeStuff(params);
};