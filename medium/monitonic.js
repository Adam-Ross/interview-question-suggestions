
function mon(arr) {
    return doesIncrease(arr) || doesDecrease(arr) ? true : false
}

function doesIncrease(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            return false
        }
    }
    return true
}

function doesDecrease(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i+1]) {
            return false
        }
    }
    return true
}

const arr = [9,8,7,6,5,5,4]
console.log(mon(arr))