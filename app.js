
//find the time complexity
function sumNumbers(numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;

    }
    return result;
}
console.log(sumNumbers([1, 3, 10,64]));