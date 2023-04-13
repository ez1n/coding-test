/**
 * 깊이 우선 순회 (DFS)
 *
 * 시작 정점에서 가지를 따라 탐색하는 방법
 * 길이 막힐 때까지 인접점을 따라가며 탐색
 * 방문했던 정점을 기억해야함!
 * 재귀형 (Recursive), 순환형 (Iterative)
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

  // 재귀형 (Recursive)
  depthFirstRecursive(start) {
    if (!this.adjacencyList[start]) return undefined;

    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    function DFS(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);
      for (let v of adjacencyList[vertex]) {
        if (!visited[v]) DFS(v);
      }
    }

    DFS(start);

    return result;
  }

  // 순환형 (Iterative)
  depthFirstIterative(start) {
    let visited = {};
    let stack = [];
    let result = [];

    stack.push(start);
    visited[start] = true;

    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      for (let v of this.adjacencyList[vertex]) {
        if (visited[v]) continue;

        stack.push(v);
        visited[v] = true;
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

console.log(g.depthFirstRecursive("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(g.depthFirstIterative("A")); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
