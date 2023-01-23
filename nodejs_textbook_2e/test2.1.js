// common
var sayNode = function() {
    console.log('Node');
};

// old style
var es = 'ES';
var oldObj = {
    sayJs: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObj[es+6] = 'Fantastic';

oldObj.sayNode();
oldObj.sayJs();
console.log(oldObj.ES6);

// new style
var es = 'ES';
var newObj = {
    sayJs() {
        console.log('JS');
    },
    sayNode,
    [es+6]: 'FantasticNew',
};

newObj.sayNode();
newObj.sayJs();
console.log(newObj.ES6);

