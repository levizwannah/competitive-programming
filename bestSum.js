/**
 * 
 * @param {int} target 
 * @param {Array<int>} numbers 
 * @returns {Array<int>|null}
 */
function bestSum(target, numbers, memo = {}){
    
    if(target in memo) return memo[target];

    if(target === 0) return [];
    if(target < 0) return null;

    let bs = null;

    for(let n of numbers){
        const r = target - n;
        const found = bestSum(r, numbers, memo);

        if(found === null) continue;

        let tmp = [...found, n];

        if(bs === null) bs = tmp;
        if(bs.length > tmp.length) bs = tmp;
    }

    memo[target] = bs;

    return bs;
}

console.log(bestSum(300, [5, 2, 4, 1]));