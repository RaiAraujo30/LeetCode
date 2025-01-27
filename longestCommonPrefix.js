/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if (!strs.length) return ""; 
    let prefix = "";
    for( let i = 0; i < strs[0].length; i++){
        const char = strs[0][i]

        for( let j = 1; j < strs.length; j++){
            if ( i >= strs[j].length || strs[j][i] != char){
                console.log("prefix: " +prefix)
                return prefix
            }
        }
        prefix += char
    }
    return prefix

}

console.log(longestCommonPrefix(["flower","flow","flight"]))