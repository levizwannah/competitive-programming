/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let freq = new Map();

    for(let n of arr) {
        freq.set(n, freq.get(n) ? Number(freq.get(n)) + 1 : 1);
    }

    modeArr = [];

    for(let [k, v] of freq){
        modeArr.push([k, v]);
    }

    modeArr.sort((a, b) => a[1] - b[1]);
    
    let total = 0;
    let setSize = 0;

    for(let i in modeArr){
        total += modeArr[modeArr.length - i - 1][1];
        setSize++;
        if(total >= arr.length / 2) break;
    }

    return setSize;
};
