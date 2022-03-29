console.log('This is dep1...');
const dep2 = require('./test3_dep2.js');

module.exports = () => {
    console.log('at dep1: refer dep2', dep2);
}