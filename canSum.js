/**
 * 
 * @param {int} target 
 * @param {array} numbers 
 */
function canSum(target, numbers, memo = {}){
    if(target in memo) return memo[target];

    if(target === 0) return true;
    if(target < 0) return false;

    for(let n of numbers){
        const remainder = target - n;
        if(canSum(remainder, numbers, memo) === true){
            memo[target] = true;
            return true;
        }
    }

    memo[target] = false;
    return false;
}

console.log(canSum(3001, [3, 3]));