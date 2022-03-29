console.log( 'a' + this );
console.log( 'b' + globalThis );
console.log( this == module.exports );
console.log( this == exports );
console.log( this == global );
console.log( this == globalThis );

function whatIsThis() {
    console.log( '1' + this );
    console.log( '2' + globalThis );
    console.log( this == module.exports );
    console.log( this == exports );
    console.log( this == globalThis );
}

whatIsThis();
