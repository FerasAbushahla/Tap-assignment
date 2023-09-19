function missingNumber(nums) {
    const n = nums.length;
    let sum = 0;

    // Calculate the sum of elements in the given array
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }

    // Calculate the expected sum of numbers from 0 to n
    const expectedSum = (n * (n + 1)) / 2;

    // Return the diiference betwen the ecpected sum and the sum we have evaluated
    return expectedSum - sum;
}

// Example 1
const nums1 = [3, 0, 1];
console.log(missingNumber(nums1));
// Result: 2

// Example 2
const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums2)); 
// Result: 8

// Example 3
const nums3 = [0, 1];
console.log(missingNumber(nums3)); 
// Result: 2
