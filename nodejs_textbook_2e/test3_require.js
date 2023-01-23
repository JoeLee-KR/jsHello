console.log('require가 가장 위에 오지 않아도 됨');

module.exports = 'FIND ME 111';

//const { exOdd,exEven,exOdd2,exEven2} = require('./test3_mod_var.js');
require('./test3_mod_var.js');

//console.log( `Check: ${exOdd}, ${exEven}, ${exOdd2}, ${exEven2}`);
console.log( 'hello require.cache:');
console.log( require.cache );

console.log( 'hello require.main:' );
console.log( require.main );
console.log( require.main.filename );
testCheck = require.main === module;
console.log( 'hello '+ testCheck );

// Not require
/*

require.cache:
{/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/ms-vscode.js-debug/src/bootl…, 
/Users/doogie/opt/jsHello/nodejs_textbook_2e/test3_require.js: Module}
require.main:
Module {id: '.', path: '/Users/doogie/opt/jsHello/nodejs_textbook_2e', 
exports: 'FIND ME 111', 
filename: '/Users/doogie/opt/jsHello/nodejs_textbook_2e/test3_require.js', 
loaded: false, …}
*/

// require
/*

require.cache:
{/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/ms-vscode.js-debug/src/bootl…, 
/Users/doogie/opt/jsHello/nodejs_textbook_2e/test3_require.js: Module, 
/Users/doogie/opt/jsHello/nodejs_textbook_2e/test3_mod_var.js: Module} *****
require.main:
Module {id: '.', path: '/Users/doogie/opt/jsHello/nodejs_textbook_2e', 
exports: 'FIND ME 111', 
filename: '/Users/doogie/opt/jsHello/nodejs_textbook_2e/test3_require.js', 
loaded: false, …}
*/

