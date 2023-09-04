/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];

    const reverseInStack = () => {
        let ch;
        let tmp = [];

        while(ch = stack.pop()){
            if(ch == "(") {
                stack.push(...tmp);
                break;
            }

            tmp.push(ch);
        }
    }

    for(let ch of s) {

        if(ch == ")") {
            reverseInStack();
            continue;
        }

        stack.push(ch);
    }

    return stack.join("");
};
