import { generateNumberTree } from "./tree";

function* breadthFirstTraverse(tree) {
  let queue = [tree];

  while (queue.length > 0) {
    const node = queue.shift();

    yield node.value;

    for (const child of node.children) {
      queue.push(child);
    }
  }
}

function* depthFirstTraverse(tree) {
  let queue = [tree];

  while (queue.length > 0) {
    const node = queue.pop();

    yield node.value;

    for (const child of node.children) {
      queue.push(child);
    }
  }
}

const tree = generateNumberTree(2, 2);

for (const val of breadthFirstTraverse(tree)) {
  console.log(val);
}

for (const val of depthFirstTraverse(tree)) {
  console.log(val);
}
