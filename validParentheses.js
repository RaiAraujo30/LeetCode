/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    var stack = []
    var tamanho = s.length
    if( tamanho % 2 !== 0){
        return false
    }
    for(var i = 0; i< s.length; i++){
        if(s[i] === '(' || s[i]==='[' || s[i]==='{'){
            stack.push(s[i])
        } else{
            if(
                s[i] === ')' && (stack[stack.length - 1]) !== '(' ||
                s[i] === ']' && (stack[stack.length - 1]) !== '[' ||
                s[i] === '}' && (stack[stack.length - 1]) !== '{'
            ) {
                return false
            } stack.pop()
            
        } 
    } 
    return !stack.length
}

console.log(isValid(['(',']']))