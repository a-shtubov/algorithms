export function generateArrayNumber(len, min = 0, max = 50) {
  return Array.from({ length: len }, () =>
    Math.round(Math.random() * (max - min) + min)
  );
}
