var sayNode = function() {
    console.log('Node');
};

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

