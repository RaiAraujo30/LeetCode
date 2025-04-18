/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for(let i =0; i<= haystack.length; i++){
    let j = 0
    let contador = ''
    if(haystack[i] === needle[j]){
       
            while(haystack[i+j] === needle[j]){
                contador += haystack[i+j]
                if(contador === needle){
                    return i
                }
                j++
            }
        
    }
  }  
  return -1
};

console.log(strStr('aabaaadaaac','aabaaac'))