/**
 * Checks if a word can be constructed from a word bank
 * @param {string} target 
 * @param {array<string>} bank 
 */
function canConstruct(target, bank, memo = {}){
    if(target in memo) return memo[target];
    if(target === "") return true;

    for(const word of bank){
        
        let index = target.indexOf(word);

        if(index !== 0) continue;
        let t = target.slice(word.length);

        if(canConstruct(t, bank, memo) === true){
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
}

console.log(canConstruct("abcdefdef", ["a", "ab", "abc", "cd", "def", "abcd"]));