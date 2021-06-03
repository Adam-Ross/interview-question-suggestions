// Move all number of a given arg to the end of an array

// Even though we use two while loops here, the amount that we are iterating is a max of N
// So, this solution is actually O(n) - linear time.
// Space complexity if O(1) - since we are not using any extra data structures.

function moveNumber(arr, num) {
    let i = 0
    let j = arr.length - 1
    let temp
    while(i < j) {
        while(i < j && arr[j] === num) {
            j--;
        } 
        if(arr[i] === num) {
            swap(i, j, arr)         
        }
        i++
    }
    return arr
}

function swap(i, j, arr) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp   
}


var arr = [1,2]








