import { generateArrayNumber, swap } from "../utils/array";

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestIdx = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j;
      }
    }

    swap(arr, i, smallestIdx);
  }

  return arr;
}

const arr1 = generateArrayNumber(20); //?

selectionSort(arr1); //?
