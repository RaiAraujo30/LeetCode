/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let tamanhoOriginal = nums.length;
    let arr = []
    for(let i =0; i< nums.length; i++){
        if(nums[i] === nums[i+1]){
            tamanhoOriginal--
        } else{
            arr.push(nums[i])
        }
    }
    return arr
};

console.log(removeDuplicates([1,1,2]))