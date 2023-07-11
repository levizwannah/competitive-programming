/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    
    const max = (start, end) => {
        let m = start;

        for(let i = start; i <= end; i++){
            if(arr[m] < arr[i]) m = i;
        }

        return m;
    }

    const reverse = (start, end) => {
        
        while(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            
            start++, end--;
        }

    }
    
    let result = [];

    for(let i = arr.length - 1; i >= 0; i--){
        
        let maxIndex = max(0, i);

        if(maxIndex === i) continue;

        if(maxIndex !== 0) {
            reverse(0, maxIndex);
            result.push(maxIndex + 1);
        }

        reverse(0, i);
        result.push(i + 1);
    }

    return result;
};
