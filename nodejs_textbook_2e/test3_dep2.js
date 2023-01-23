console.log('This is dep2...');
const dep2 = require('./test3_dep1.js');

module.exports = () => {
    console.log('at dep2: refer dep1', dep1);
}