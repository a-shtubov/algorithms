class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  append(node) {
    this.children.push(node);
  }
}

function* generateRandomNumber(min, max) {
  while (true) {
    yield Math.floor(Math.random() * (max - min) + min);
  }
}

function* generateConsecutiveNumber() {
  let i = 0;

  while (true) {
    yield i++;
  }
}

export function generateNumberTree(
  depth,
  width,
  iter = generateConsecutiveNumber()
) {
  let tree = new Node(iter.next().value);
  let queue = [tree];
  let d = 0;

  while (d < depth) {
    for (let i = 0; i < width ** d; i++) {
      const node = queue.shift();

      for (let i = 0; i < width; i++) {
        const child = new Node(iter.next().value);

        node.append(child);
        queue.push(child);
      }
    }

    d += 1;
  }

  return tree;
}
