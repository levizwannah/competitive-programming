/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let r = [];
    for(i = 1; i <= n; i++){
        if(i % 3 == 0 & i % 5 == 0){
            r[i-1] = "FizzBuzz";
            continue;
        }
        
        if(i % 5 == 0) {
            r[i-1] = "Buzz";
            continue;
        }
        
        if(i % 3 == 0){
            r[i-1] = "Fizz";
            continue;
        }
        
        r[i-1] = `${i}`;
    }
    
    return r;
};