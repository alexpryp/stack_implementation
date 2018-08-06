"use strict"

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
