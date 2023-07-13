/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = new Map();

    for(let n of nums){
        freq.set(n, (freq.get(n) ? Number(freq.get(n)) : 0) + 1);
    }

    let entries = Array.from(freq.entries());

    const swap = (i, j) => {
        [entries[i], entries[j]] = [entries[j], entries[i]];
    }

    const partition = (start, end) => {
        let pivot = entries[end][1];
        let i = start - 1;

        for(let k = start; k < end; k++){
            
            if(entries[k][1] > pivot){
                i++;
                swap(i, k);
            }
        }

        swap(i + 1, end);
        return i + 1;
    }


    let low = 0;
    let high = entries.length - 1;

    while(low <= high) {
        let mid = partition(low, high);

        if(mid === (k - 1)) {
            return entries.slice(0, k).map((a) => a[0]);
        }

        if(mid > (k - 1)) high = mid - 1;
        else low = mid + 1;
    }

    return [];
};
