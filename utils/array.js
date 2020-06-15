export function generateArrayNumber(len, min = 0, max = 50) {
  return Array.from({ length: len }, () =>
    Math.round(Math.random() * (max - min) + min)
  );
}

export function swap(arr, i1, i2) {
  const tmp = arr[i1];

  arr[i1] = arr[i2];
  arr[i2] = tmp;
}
