/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    // Assume o primeiro elemento como o prefixo inicial
    let prefixo = strs[0];

    // Itera sobre as palavras restantes
    for (let i = 1; i < strs.length; i++) {
        // Reduz o prefixo até que ele seja um prefixo da palavra atual
        while (strs[i].indexOf(prefixo) !== 0) {
            prefixo = prefixo.substring(0, prefixo.length - 1);
            if (prefixo === "") return "";
        }
    }
    console.log(prefixo)
    return prefixo;
};

let array = ["flower","flow","flight"]
longestCommonPrefix(array)