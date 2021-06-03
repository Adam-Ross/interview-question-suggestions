// Write a function that takes in an array of positive integers and returns the maximum sum of non-adjecent elements in the array.


// If the input array is empty, the function should return 0
// array = [75, 105, 120, 75,90, 135]
// => 330, (75 + 120 + 135 = 330)
// Expect O(n) solution.
// 1. make second array
// 2. To start, secondArr[0] === arr[0]
// 3. arr[1] === larger or (arr[0], arr[1])
// 4. current max sum is going to equal the larger of maxSums[i - 1], or maxSums[i -2] + arr[i]
// 5. Return maxSums last element => 330

function nonAdjecent(arr) {
    if(!arr.length) return 0
    if(arr.length === 1) return arr[0]
    
    // Create our maxSums array, this will contain the first element
    const maxSums = arr.slice()
    
    // Set elem at position 1 of maxSums to the larger of first two elems in arr
    maxSums[1] = Math.max(arr[0], arr[1])
    
    
    // Loop through arr and set maxSums[i] to the larger of last two
    for(let i = 2; i < arr.length; i++) {
        maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + arr[i])
    }
    // return maxSums last elem
    return maxSums[maxSums.length - 1]
}

const arr = [75, 105, 120, 75, 90, 135]
console.log(nonAdjecent(arr))
