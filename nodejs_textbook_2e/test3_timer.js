const aTimeout1 = setTimeout(()=>{
    console.log('Run after 1.5sec');
}, 1500)

const aInterval1 = setInterval(()=>{
    console.log('Run every 1.0sec');
}, 1000)

aTimeout2 = setTimeout(()=>{
    console.log('Run after 5.0sec, not Run');
}, 5000)

setTimeout(()=>{
    clearTimeout(aTimeout2);
    clearInterval(aInterval1);
}, 2500)

const aImmediate1 = setImmediate(() =>{
    console.log('Run NOW1');
})

const aImmediate2 = setImmediate(() => {
    console.log('Run NOW2');
})

console.time('Console--Time');
for( let i = 0; i< 1000000; i++) {
    //console.log(i);
}
console.timeEnd('Console--Time');

clearImmediate(aImmediate1);
aTimeout3 = setTimeout(()=>{
    clearImmediate(aImmediate2);
},0.1)

console.log(__filename);
console.log(__dirname);