"use strict"

function Stack( capacity ) {
	this._capacity = capacity || Infinity;
	this._size = 0;
	this._stack = {};
}

Stack.prototype.push = function( value ) {
	if ( this._size < this._capacity ) {
		this._stack[this._size++] = value;
		return this._size;
	}

	return "Stack is full";
};

Stack.prototype.pop = function() {
	var value = this._stack[--this._size];

	delete this._stack[this._size];

	if( this._size < 0 ) {
		this._size = 0;
	}

	return value;
};

Stack.prototype.topStack = function() {
	return this._stack[this._size-1];
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
console.log( myStack.topStack() );


console.log( myStack.pop() );
console.log( myStack._size );
console.log( myStack.pop() );
console.log( myStack._size );
console.log( myStack.getSize() );
