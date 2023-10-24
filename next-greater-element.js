/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();

    let stack = [];
    for(let n of nums2) {
        
        while(stack.length && stack[stack.length - 1] < n) {
            let c = stack.pop();
            map.set(c, n);
        }

        stack.push(n);
    }

    return nums1.map((v) => map.get(v) ?? -1);
};
