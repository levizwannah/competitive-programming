/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let final = [];
    let operations = {
        "+": (a, b) => a + b, 
        "-": (a, b) => a - b, 
        "/": (a, b) => Math.trunc(a/b), 
        "*": (a, b) => a * b
        };

    for(let i = 0; i < tokens.length; i++){
        let token = tokens[i];

        if(!operations[token]) {
            final.push(Number(token));
            continue;
        } 

        let b = final.pop();
        let a = final.pop();

        final.push(operations[token](a, b));
    }

    return final.pop();
};
