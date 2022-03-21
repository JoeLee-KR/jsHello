var candyMachine = {
    status: {
        name: 'NodeCandy',
        count: 5,
    },
    getCandy: function() {
        this.status.count--;
        return this.status.count;
    },
    logCandy: function() {
        console.log(`${this.status.name}==${this.status.count}..`)
    },
}

var getCandyV = candyMachine.getCandy;
var countV = candyMachine.status.count;
var getCandyV = candyMachine.getCandy;
console.log(`Candy ${candyMachine.status.name} has ${countV}...`)
candyMachine.logCandy();

console.log('=====');

var candyMachine2 = {
    status: {
        name: 'NodeCandy',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
    logCandy() {
        console.log(`${this.status.name}==${this.status.count}..`)
    },
}

const { getCandy, status: {count}, logCandy } = candyMachine2
console.log(`Candy ${candyMachine2.status.name} has ${candyMachine2.status.count}...`)
console.log(`Candy ${getCandy} and ${logCandy} has ${count}...`)

candyMachine.logCandy();