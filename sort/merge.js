import { generateArrayNumber } from "../utils/array";

function mergeAlt(arr, l, m, r) {
  const tmp = [...arr];

  let i = l;
  let j = m + 1;
  let idx = l;

  while (i <= m && j <= r) {
    const lel = arr[i];
    const rel = arr[j];

    if (rel > lel) {
      tmp[idx] = arr[i];
      i++;
    } else {
      tmp[idx] = arr[j];
      j++;
    }

    idx++;
  }

  let x = i <= m ? i : j;
  let lim = i <= m ? m : r;

  while (x <= m) {
    tmp[idx] = arr[x];
    x++;
    idx++;
  }

  for (let k = l; k <= r; k++) {
    arr[k] = tmp[k];
  }

  return arr;
}

function merge(arr, l, m, r) {
  const tmp = [...arr];

  let i = l;
  let j = m + 1;
  let idx = l;

  while (idx <= r) {
    const lel = i <= m ? arr[i] : Infinity;
    const rel = j <= r ? arr[j] : Infinity;

    if (rel > lel) {
      tmp[idx] = arr[i];
      i++;
    } else {
      tmp[idx] = arr[j];
      j++;
    }

    idx++;
  }

  for (let k = l; k <= r; k++) {
    arr[k] = tmp[k];
  }

  return arr;
}

function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (right <= left) {
    return arr;
  }

  const middle = Math.floor((right + left) / 2);
  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);
  merge(arr, left, middle, right);

  return arr;
}
