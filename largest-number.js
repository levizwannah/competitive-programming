/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort( (a, b) => {
        
        let strA = a.toString();
        let strB = b.toString();

        return parseInt(strA + strB) > parseInt(strB + strA) ? -1 : 1;
    });

    if(nums[0] === 0) return '0';

    return nums.join('');
};
