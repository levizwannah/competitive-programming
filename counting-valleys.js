function countingValleys(steps, path) {
    // Write your code here

    let level = 0;
    let down = false;
    let prevLevel = 0;
    
    let valleys = 0;
    
    for( let s of path) {
        
        prevLevel = level;
        
        if(s === 'U') level++;
        if(s === 'D') level--;
        
        down = level < 0;
        
        if(!down && prevLevel < 0) {
            valleys++;
        }
        
    }
    
    return valleys;
}
