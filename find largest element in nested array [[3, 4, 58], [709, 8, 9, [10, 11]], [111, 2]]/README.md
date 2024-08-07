

# find largest element in nested array [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]


1.. Using -Infinity ensures that any number in the array will be larger, even if the array contains negative numbers. However, if you prefer to start with the first element of the array, you need to account for the possibility that the first element might be a nested array.


2.. (a) Array.isArray checks the type of the variable to see if it is an array.
    (b) Array.prototype.includes checks if a specific value is an element within an array.

