"use strict"

/*function Stack( capacity ) {
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
*/



function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._stack = [];
}

Stack.prototype.push = function(item) {
    if ( this._stack.length < this._capacity ) {
        this._stack.push(item);
        return this._stack.length;
    }
    return"Stack is full";
};

Stack.prototype.pop = function() {
    if (this._stack.length < 1) {
        return "stack is ampty";
    }
    return this._stack.pop();
};




/*Testing*/
Stack.prototype.getSize = function() {
    return this._stack.length;
};

var stack = new Stack(100);

console.log(stack._capacity);
console.log(stack._stack.length);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack._stack.length);
console.log(stack.pop());
console.log(stack._stack.length);
console.log(stack.pop());
console.log(stack.getSize());
