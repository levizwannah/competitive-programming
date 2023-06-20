/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    
    let map = new Map();
    let pairs = 0;

    for(let n of nums) {

        if(map.has(n)) {
            pairs += map.get(n);
        }

        map.set(n, (map.get(n) || 0) + 1);

    }
        

    return pairs;
    
};
