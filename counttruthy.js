function count(array){
    let counter = 0
    for(let value of array){
        if(value){
            counter = counter + 1
        }
    }
    return counter
}

const array = [1, 0, true, false]

console.log(count(array))