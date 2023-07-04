/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a, b) => a - b);

    let max = 0;

    for(let i = 0, j = piles.length - 1, k = j - 1; i < k; i ++, j -= 2, k -= 2) {
        max += piles[k];
    }

    return max;
};
