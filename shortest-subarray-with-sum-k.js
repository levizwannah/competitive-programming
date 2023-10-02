/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {

   let n = nums.length, sum = 0, ans = n + 1, queue = [];

   for(let i = 0; i < n; i++) {
       sum += nums[i];

       if(sum >= k) ans = Math.min(ans, i + 1);

       while(queue.length && sum - queue[0].sum >= k)  ans = Math.min(ans, i - queue.shift().i);
       while(queue.length && sum <= queue[queue.length - 1].sum) queue.pop();

       queue.push({sum, i});
    } 

   return ans == n + 1 ? -1 : ans;
};
