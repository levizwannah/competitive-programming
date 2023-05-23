/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let final = [];

    while(left < right){

        final.push(nums[left++]);
        final.push(nums[right--]);

    }

    if(left === right) final.push(nums[left]);

    return final;
};
