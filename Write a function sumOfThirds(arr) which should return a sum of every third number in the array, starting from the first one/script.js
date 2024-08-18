
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
function sumOfThird(arr) {
    for (let i = 0; i <arr.length; i+=3){
        sum += arr[i]
    }
    return sum

}

console.log(sumOfThird(arr));
