class Graph {
  connections = new Map();

  constructor(num) {
    this.generateEmptyConnections(num);
  }

  createEmptyConnection(v) {
    this.connections.set(v, new Set());

    return this.connections.get(v);
  }

  generateEmptyConnections(num) {
    for (let i = 0; i < num; i++) {
      this.createEmptyConnection(i);
    }
    // for (let i = 0; i < num; i++) {
    //   if (Math.random() > 0.3) {
    //     this.connect(i, i + 1);
    //   }
    // }
  }

  connect(v1, v2) {
    const c1 = this.connections.get(v1) || this.createEmptyConnection(v1);
    const c2 = this.connections.get(v2) || this.createEmptyConnection(v2);

    c1.add(v2);
    // c2.add(v1);
  }

  disconnect(v1, v2) {
    const c1 = this.connections.get(v1) || this.createEmptyConnection(v1);
    const c2 = this.connections.get(v2) || this.createEmptyConnection(v2);

    c1.delete(v2);
    // c2.delete(v1);
  }

  findPath() {}

  areConnected(v1, v2) {
    const c1 = this.connections.get(v1);
    const c2 = this.connections.get(v2);

    if (c1.has(v2)) {
      return true;
    }

    for (let c of c1) {
      if (this.areConnected(c, v2)) {
        return true;
      }
    }

    return false;
  }
}

const graph = new Graph(10);
graph.connect(2, 3);
graph.connect(3, 4);
graph.connect(4, 8);

graph.areConnected(3, 8); //?
