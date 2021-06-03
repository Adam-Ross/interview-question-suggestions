function makeAndSortBigArray(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b)
}

function findSmallest(arr1, arr2) {
    const arr = makeAndSortBigArray(arr1, arr2)
    let finalRight
    let finalLeft
    let min = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < arr.length; i++) {
        let left = arr[i]
        let right = arr[i + 1]
        
        if(!comeFromSameArray(arr1, arr2, left, right) && right - left < min) {
            finalRight = right
            finalLeft = left
            min = right - left
        }
    }
    return findAndFormatAnswer(arr1, arr2, finalLeft, finalRight)
}

function comeFromSameArray(arr1, arr2, left, right) {
    if(arr1.includes(left) && arr1.includes(right)) {
        return true
    }
    if(arr2.includes(left) && arr2.includes(right)) {
        return true
    }
    return false
}

function findAndFormatAnswer(arr1, arr2, left, right) {
    if(arr1.includes(left)) {
        return [left, right]
    } 

    if(arr2.includes(left)) {
        return [right, left]
    }
}

const arr1 =  [-1,5,10,20,28,3]
const arr2 = [26,134,135,15,17]
// console.log([...arr1, ...arr2].sort((a, b) => a - b))
console.log(findSmallest(arr1, arr2))   


