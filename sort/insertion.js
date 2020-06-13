function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    let j = i - 1;
    let flag = false;

    while (j >= 0 && arr[j] > el) {
      arr[j + 1] = arr[j];
      j--;
      flag = true;
    }

    if (flag) {
      arr[j + 1] = el;
    }
  }

  return arr;
}

const arr1 = Array.from({ length: 10 }, () => Math.round(Math.random() * 20)); //?
console.log(sort(arr1));
