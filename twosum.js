/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let k = i+1 ; k<nums.length; k++){
            if((nums[i] + nums[k]) === target ){
                return [i, k];
            }
            continue;
        }
    }
}

soma = twoSum([1,2,3,4,5], 4)
console.log(soma)