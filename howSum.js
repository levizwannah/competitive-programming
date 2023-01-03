/**
 * 
 * @param {int} target 
 * @param {Array} numbers 
 * 
 * @returns {Array<int>|null}
 */
function howSum(target, numbers, memo = {}){

    if(target in memo) return memo[target];

    if(target == 0) return [];

    memo[target] = null;

    if(target < 0) return memo[target];

    for(let n of numbers){

        const r = target - n;
        const final = howSum(r, numbers, memo);

        if(final === null) continue;
        memo[target] = [...final, n];

        return memo[target];
    }

    return memo[target];
}

console.log(howSum(30, [4, 2]));