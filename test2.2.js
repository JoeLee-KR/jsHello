var sayNode = function() {
    console.log('Node');
};

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
