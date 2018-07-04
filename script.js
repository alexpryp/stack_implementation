"use strict"

function Stack() {
	this._size = 0;
	this._objact = {};
}

Stack.prototype.push = function( value ) {
	var size = ++this._size;

    this._objact[size] = value;
};

Stack.prototype.pop = function() {
	var size = this._size;
	var deletedData;

		if( size ) {
			deletedData = this._objact[size];

			delete this._objact[size];
			this._size--;

			return deletedData;
		}
};

Stack.prototype.getSize = function() {
	return this._size;
};




/*Testing*/
var myStack = new Stack();

myStack.push( "a" );
myStack.push( "b" );
myStack.push( "c" );
myStack.push( "d" );
myStack.push( "e" );

console.log( myStack._size );
console.log( myStack._objact[myStack._size] );


console.log( myStack.pop() );
console.log( myStack._size );
console.log( myStack.pop() );
console.log( myStack._size );
console.log( myStack.getSize() );
