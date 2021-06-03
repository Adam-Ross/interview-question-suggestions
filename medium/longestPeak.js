// Write a function that takes in an array of integers and returns the longest peak in the array.

// A peak is defined as adjecent ints in the array that are strictl increasing until they reach a tip, at which point they become strictly decreasing. At least 3 ints are required to make a peak. 

// For example, the ints [1,4,10,2] form a peak, but the ints [4,2,10] do not. 

const arr = [1,2,3,3,4,0,10,6,5,-1,12]
console.log(longestPeak(arr))

function longestPeak(arr) {
    let longestPeakLength = 0
    let i = 1;
    while(i < arr.length - 1) {
        const isPeak = arr[i - 1] < arr[i] && arr[i + 1] < arr[i]
        // not a peak
        if(!isPeak) {
            i++
            continue
        }
        
        let leftIdx = i - 2
        while(leftIdx > 0 && arr[leftIdx] < arr[leftIdx + 1]) {
            leftIdx--
        }
        let rightIdx = i + 2
        while(rightIdx < arr.length && arr[rightIdx] < arr[rightIdx - 1]) {
            rightIdx++
        }
        const currentPeakLength = rightIdx - leftIdx - 1
        longestPeakLength = Math.max(currentPeakLength, longestPeakLength)
        i = rightIdx
    }
    return longestPeakLength
}

