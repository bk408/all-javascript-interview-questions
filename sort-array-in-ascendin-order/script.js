// using sort method
/*let arr = [4, 6, 8, 12, 3, 1]

const newArr = arr.sort((a, b) => a - b)

console.log(newArr);  */

// Bubble sort method


let arr = [4, 6, 8, 12, 3, 1]

function bubbleSort(arr){
for(let i=0; i<arr.length - 1; i++){
  let swapped = false;
  for(let j=0; j < arr.length - i -1; j++){
     if(arr[j] > arr[j+1]){
       // swapping the values
       let temp = arr[j] // store current index
       arr[j] = arr[j+1] 
       arr[j+1] = temp // swapped the values
       swapped = true;
     }
  
  }
  //If no value is swapped or the array is already sorted then 
  if(!swapped) break;
}
return arr
}

console.log("Before sorting", arr)
console.log("After sorting", bubbleSort(arr))
