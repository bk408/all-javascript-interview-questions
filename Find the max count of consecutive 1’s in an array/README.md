

#  Find the max count of consecutive 1’s in an array 

Logic:-  ForLoop


We Initialize two variables 

1. maxCount => It is used to store max number of consecutive 1s found 

2. count => It is used to count the current streak in consecutive 1s


for Loop runs the loop through each element of the array

then it check if we have value of 1 or not, if it is 1 then it increase the count and then it check another conditions where it is check if count is greater than maxCount or not. If it is greater than then update them like maxCount === count


and if first condition is not meet or we can say the value is not 1 then reset the count to 0


return the maxCount