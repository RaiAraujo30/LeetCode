
/**
 Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    var romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    var result = 0;

    

    for (let i = 0; i < s.length; i++) {
        // Se o valor do próximo número for maior que o valor atual,
        // subtraia o valor atual do resultado, ex:(IV) tirar I de V = 4    
        if (romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
            result = result - romanNumerals[s[i]];
        } else {
            // Se o valor do próximo número for menor que o valor atual,
            // adicione o valor atual ao resultado, ex:(VI) adicionar I a V = 6
            result += romanNumerals[s[i]];
            console.log(result)
        }
    }

    return result;
};

console.log(romanToInt("IX")) // 3