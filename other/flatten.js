function flatten(list) {
  let stack = [[list, 0]];
  let res = [];

  while (stack.length > 0) {
    const [curArr, curIdx] = stack.pop();

    L: for (let j = curIdx; j < curArr.length; j++) {
      const el = curArr[j];

      if (Array.isArray(el)) {
        stack.push([curArr, j + 1]);
        stack.push([el, 0]);

        break L;
      } else {
        res.push(el);
      }
    }
  }

  return res;
}
