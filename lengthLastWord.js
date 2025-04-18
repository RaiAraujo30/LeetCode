/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arrPalavras = s.split(' ')
    for(let i = arrPalavras.length -1; i >= 0; i--){
        if(arrPalavras[i] !== ''){
            let ultima = arrPalavras[i].length
            return ultima
        }
    }


    return 0
};

console.log(lengthOfLastWord('Hello world'))