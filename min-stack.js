class MinStack {
    stack = [];

    push(val) {
        let input = [val, this.min(val)];
        this.stack.push(input);
    }

    min(val) {
        let curr = this.getMin();
        if(curr === null) curr = val;
        return Math.min(curr, val);
    }

    pop() {
        return this.stack.pop()[0];
    }

    top() {
        return this.stack[this.stack.length - 1][0];
    }

    getMin() {
        if(this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1][1];
    }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
