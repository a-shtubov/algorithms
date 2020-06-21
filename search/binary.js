export function binarySearch(arr, val) {
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

export function findBinaryClosest(arr, val, predict) {
  if (val < arr[0]) {
    return 0;
  }

  if (val > arr[arr.length - 1]) {
    return arr.length - 1;
  }

  let l = 0;
  let r = arr.length - 1;
  let res = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (val === arr[mid]) {
      res = mid;
      break;
    }

    if (val < arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  if (res !== -1) {
    return res;
  }

  return predict(arr[l], arr[r]) <= 0 ? l : r;
}
