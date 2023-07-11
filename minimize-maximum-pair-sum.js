/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    
    nums.sort((a, b) => a - b);

    let high = nums.length - 1;
    let low = 0;
    let max = -Infinity;

    while(low < high){
        max = Math.max(max, nums[low] + nums[high]);
        low++, high--;
    }

    return max;
};
