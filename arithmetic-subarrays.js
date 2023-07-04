/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const checkRange = (l, r) => {
        let max = -Infinity;
        let min = Infinity;

        for(let i = l; i <= r; i++){
            max = Math.max(max, nums[i]);
            min = Math.min(min, nums[i]);
        }

        if(max === min) return true;

        const diff = (max - min) / (r - l);

        let set = new Set();

        for(let i = l; i <= r; i++){
            if(set.has(nums[i])) return false;
            if((nums[i] - min) % diff !== 0) return false;
            set.add(nums[i]);
        }

        return true;
    }

    return l.map((start, index) => checkRange(start, r[index]));
};
