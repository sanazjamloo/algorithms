/*Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.
If target exists, then return its index, otherwise return -1.
Note:
You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].*/


// Iterative implementation

int binarySearch(int[] nums, int target) {
  if (nums == null || nums.length == 0)
    return -1;

  int left = 0, right = nums.length - 1;
  while (left <= right) {
    // Prevent (left + right) overflow
    int mid = left + (right - left) / 2;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
       left = mid + 1;
    } else {
       right = mid - 1;
     }
  }
  // End Condition: left > right
  return -1;
}


//Recursive implementation
public class RecursiveBinarySearch {
    public static int binarySearch (int[] input, int target, int start, int end) {
        if start > end {
            return -1;
        } else {
            int mid = start + (end - start) / 2;

            if (target < input[mid]) {
              // the function keeps calling itself until it finds the target.
                return binarySearch (input, target, start, mid);
            } else if (target > input[mid]) {
                return binarySearch (input, target, mid+1, end);
            } else {
                return mid;
            }
        }
    }
}
