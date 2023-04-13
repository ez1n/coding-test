/**
 * 너비 우선 순회 (BFS)
 *
 *
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex] || [];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return this;
  }

  breadthFirst(start) {
    let result = [];
    let queue = [];
    let visited = {};

    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      for (let v of this.adjacencyList[vertex]) {
        if (visited[v]) continue;

        visited[v] = true;
        queue.push(v);
      }
    }

    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("D", "B");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.breadthFirst("A")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
