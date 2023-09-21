
function findTheNumber(nums) {

  for (let i = 0; i < nums.length; i++) {
    let isNonFrequent = true;

    //Here we loop again at the same array and check if the index of the
    //element from the first loop do not equal the index of the same
    //iteration of the second loop, also the value of the index of the
    //first loop is equal to the value of the index of the second loop,
    //this must ne the frequant nuber we are looking for.
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        isNonFrequent = false;
        break;
      }
    }

    if (isNonFrequent) {
      return nums[i];
    }
  }
}

// Example
nums = [1, 1, 3, 3, 2];
result = findTheNumber(nums);
console.log(result);
// Result: 2