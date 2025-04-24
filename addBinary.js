/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    let carry = 0;
    let arrA = a.split('')
    let arrB = b.split('')
    // Alinhamento
    if (a.length !== b.length) {
        if (a.length > b.length) {
            let diferenca = a.length - b.length
            for (let i = 0; i < diferenca; i++) {
                arrB.unshift(0)
            }
        } else {
            let diferenca = b.length - a.length
            for (let i = 0; i < diferenca; i++) {
                arrA.unshift(0)
            }
        }
    }

    let resultado = []
    for (let i = arrA.length - 1; i >= 0; i--) {
        //Verifica se é o bit mais significante:
        if (i === 0) {
            let soma = parseInt(arrA[i]) + parseInt(arrB[i]) + carry
            let inserir = soma % 2
            resultado.unshift(inserir)
            carry = Math.floor(soma / 2)
            if (carry === 1) {
                resultado.unshift(1)
            }
        } else {
            let soma = parseInt(arrA[i]) + parseInt(arrB[i]) + carry
            let inserir = soma % 2
            carry = Math.floor(soma / 2)
            resultado.unshift(inserir)
        }

    }

    return resultado.join('')
};

console.log(addBinary("1010", "1011"))