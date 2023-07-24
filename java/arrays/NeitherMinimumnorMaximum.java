class Solution {

    public int findNonMinOrMax(int[] nums) {
        Arrays.sort(nums);
        int num;

        if (nums.length > 2) {
            num = nums[1];
        } else {
            num = -1;
        }

        return num;
    }
}
