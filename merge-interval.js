/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    intervals.sort((p1, p2) => p1[0] - p2[0]);

    let answer = [];

    let tmp = [];

    for(let interval of intervals){

        if(tmp.length === 0){
            tmp = interval;
            continue;
        }

        if(tmp[1] >= interval[0]){
            tmp[1] = Math.max(interval[1], tmp[1]);
            continue;
        } 

        answer.push(tmp);
        tmp = interval;
    }
    answer.push(tmp);

    return answer;
};
