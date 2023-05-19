/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
   return quickSelect(points, k);
};

var partition = (points, low, high) => {

    let pivotDist = distance(points[low][0], points[low][1]);

    let i = high + 1;

    for(let j = high; j > low; j--){
        let x = points[j][0];
        let y = points[j][1];

        if(distance(x, y) > pivotDist){
            i--;
            swap(i, j, points);
        }
    }

    swap(low, i - 1,  points);
    return i - 1;
}

var distance = (x, y) => {
    return Math.sqrt(x**2 + y**2);
}

var swap = (i, j, arr) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

var quickSelect = (arr, k) => {

    let left = 0; right = arr.length - 1;

    while(left < right){
        let mid = partition(arr, left, right);

        if(mid === k) break;

        if(mid < k){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }

    }
    
    return arr.slice(0, k);
}
