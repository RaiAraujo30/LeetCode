/**
 * @param {number} x
 * @return {boolean}
 */

// Given an integer x, return true if x is a palindrome, and false otherwise.
var isPalindrome = function palindrome(number){
    let str = number.toString()
    let newB = str.split('')
    let newA = str.split('').reverse()

    if (newB.join('') === newA.join('')){
        return true
    }
    return false;
}

console.log(isPalindrome(121))