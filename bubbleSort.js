/* Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted,
compares each pair of adjacent items and swaps them if they are in the wrong order.
The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.*/

// Time complexity O(n^2)
// Space complexity O(1)


//array to sort
var array = [9,2,5,6,4,3,7,10,1,8];

//swap function helper
function swap (array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

//Basic implementation
function bubbleSortBasic (array){
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if ( array[j-1] > array[j]) {
        swap(array, j-1, j);
      }
    }
  }
return array;

}

console.log(bubbleSortBasic (array.slice()));  // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


//Correct implementation
function bubbleSort (array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array [i+ 1] && array[i] > array[i+1]) {
        swap(array, i, i+1);
        swapped = true;

      }
    }
  } while (swapped);
  return array;
}

console.log(bubbleSort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
