/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let max = 0;
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let diff = k - nums[i];

        if(map.has(diff) && map.get(diff).length > 0){
            map.get(diff).pop();
            max++;
            continue;
        }
        let indices = map.get(nums[i]) ?? [];
        indices.push(i);
        map.set(nums[i], indices);
    }

    return max;
};
