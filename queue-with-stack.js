
var MyQueue = function() {
    this.oStack = [];
    this.iStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.iStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.reverse();
    return this.oStack.pop();
};

MyQueue.prototype.reverse = function() {
    if(this.oStack.length  !== 0) return;
    while(this.iStack.length) this.oStack.push(this.iStack.pop());
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.reverse();
    let elem = this.oStack.pop();
    this.oStack.push(elem);
    return elem;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.iStack.length === 0 && this.oStack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
