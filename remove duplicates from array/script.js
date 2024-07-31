

let arr = [1, 2, 4, 6, 4, 7, 2, 9, 1]

/* Filter method
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}


console.log(removeDuplicates(arr));*/

/* set Method
function removeDuplicates(arr) {
    return [...new Set(arr)]
}
console.log(removeDuplicates(arr));  */



function removeDuplicates(arr) {
    const newArr = arr.reduce((accumulator, currentVal) => {
        if (!accumulator.includes(currentVal)) {
          accumulator.push(currentVal);
        }
        return accumulator
    },[])
    return newArr
}

console.log(removeDuplicates(arr));