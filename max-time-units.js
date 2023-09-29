/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let freq = {};
    let arr = [];

    tasks.forEach(char => {
        if(!(char in freq)) arr.push(char);

        freq[char] = (freq[char] ?? 0) + 1;
    });

    arr.sort((a, b) => {
        if(freq[a] > freq[b]) return -1;
        if(freq[a] < freq[b]) return 1;
        return 0;
    });

    let maxFreq = freq[arr[0]] - 1;
    let idleSlots = maxFreq * n;
    

    for(let i = 1; i < arr.length; i++) {
        idleSlots -= Math.min(maxFreq, freq[arr[i]]);
    }

    return idleSlots > 0 ? tasks.length + idleSlots : tasks.length;
};
