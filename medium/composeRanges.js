// Compose range of an array

const arr = [0,1,2,4,5,6,9]

var summaryRanges = function(nums) {
    let res = [];
    let start = nums[0];
    for (let i=0;i<nums.length;i++) {
        if (nums[i]+1 != nums[i+1]) {
            res.push(start + (start==nums[i]?'':(`->${nums[i]}`)));
            start = nums[i+1];
        }
    }
    return res;
};

console.log(summaryRanges(arr))