/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    var str = x.toString()
    var newArray = str.split('').reverse().join('')

   return newArray === str

    
};

console.log(isPalindrome(121))