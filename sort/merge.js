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

function mergeSortStack(arr) {
  let stack = [];
  let i = 0;

  stack.push([0, arr.length - 1]);

  while (i < stack.length) {
    const [l, r] = stack[i];

    if (r - l > 1) {
      const mid = Math.floor((l + r) / 2);

      stack.push([l, mid]);
      stack.push([mid + 1, r]);
    }

    i++;
  }

  while (stack.length > 0) {
    const [l, r] = stack.pop();

    if (l === r) {
      continue;
    }

    const mid = Math.floor((l + r) / 2);

    let a = l;
    let b = mid + 1;
    let tmp = Array.from({ length: r - l + 1 });

    for (let idx = 0; idx < tmp.length; idx++) {
      const lel = a > mid ? Infinity : arr[a];
      const rel = b > r ? Infinity : arr[b];
      if (lel > rel) {
        tmp[idx] = arr[b];
        b++;
      } else {
        tmp[idx] = arr[a];
        a++;
      }
    }

    for (let idx = l; idx <= r; idx++) {
      arr[idx] = tmp[idx - l];
    }
  }

  return arr;
}
