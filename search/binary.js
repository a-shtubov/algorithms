function binarySearch(arr, val) {
  let l = 0;
  let r = arr.length - 1;
  let res = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === val) {
      res = mid;
      break;
    }

    if (arr[mid] > val) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
}
