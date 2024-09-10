function fizzbuzz(input) {
    if (typeof input !== 'number') {
        return "Not a Number";
    }

    if (input % 3 === 0 && input % 5 === 0) {
        return "FizzBuzz";
    } else if (input % 3 === 0) {
        return "Fizz";
    } else if (input % 5 === 0) {
        return "Buzz";
    } else {
        return input;
    }
}

console.log(fizzbuzz(15)); 
