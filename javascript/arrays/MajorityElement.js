/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  return nums.sort((a, b) => b - a)[Math.floor(nums.length / 2)];
};
