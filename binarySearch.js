/*Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.
If target exists, then return its index, otherwise return -1.
Note:
You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].*/

// define the start and end points.
// find the midpoint.
// iterate through the first half (left).
// if the target was in the first half (left), return the index of it.
// else, return -1.

// This is the iterative implementation with O(log n) logarithmic runtime.
//The while loop causes the runtime to grow.

function binarySearch(array, key) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (array[mid] === key) {
            return mid;
        }
        if (arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
