

let arr = [1004, 220, 112, 22];

let first = arr[0]
let second = -Infinity


function findSecondLargestElem(arr) {
    for (let i = 1; i < arr.length; i++){
        if (first < arr[i]) {
            second = first;
            first = arr[i]
        } else if(second < arr[i]){
            second = arr[i]
        }
    }
    return second

    
}

console.log(findSecondLargestElem(arr));
