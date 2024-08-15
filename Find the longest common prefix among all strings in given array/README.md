

# Find the longest common prefix among all strings in given array ['flower', 'flow', 'flight']

Approach:-  

1. It start by checking the value is valid or not (array is empty or not)

2. If the value is valid => we initialize the prefix variable with the first string in the array.  (// here we got the value of "flower")

3. now we iterate over the remaining values using for-loop

4. now we check if they share the prefix with the previous strings (basically, we compare the prefix with other remaining elements and check which value is common)

5. If a string doesn't share the prefix so the function shortens the prefix string by one character and check again and this process will be continue until it finds a common prefix or there is no common prefix (basically, if the value is not same then  we decrease or subtract by 1)  {using substring and indexOf}

6. Finally, if common prefix is found then it returns it and otherwise it returns as empty string or log the value as "no prefix found"