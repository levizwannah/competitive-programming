/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    stack.push(s[0]);
    
    let map = new Map();

    map.set(')', '(');
    map.set(']', '[');
    map.set('}', '{');

    for(let i = 1; i < s.length; i++) {
        let b = s[i];

        if(/[\}\)\]]/.test(b)){
            let last = stack.pop();
            if(map.get(b) !== last) return false;
            continue;
        }

        stack.push(b);
    }

    return stack.length === 0;
};
