/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let sumXOR = 0;

    const seen = new Set();

    for (const num of nums){
        if( seen.has(num)){
            sumXOR ^= num
        } else {
            seen.add(num)
        }
    }
    return sumXOR
};