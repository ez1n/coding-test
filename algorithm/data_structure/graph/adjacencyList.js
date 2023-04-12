/**
 * 인접 리스트 (Adjacency List)
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

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);

    return true;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;

    this.adjacencyList[vertex].forEach((target) => {
      this.removeEdge(vertex, target);
    });

    delete this.adjacencyList[vertex];

    return true;
  }
}

let g = new Graph();

g.addVertex("서울");
g.addVertex("용인");
g.addVertex("수원");
g.addEdge("서울", "용인");
g.addEdge("수원", "용인");
console.log(g); // adjacencyList: { '서울': [ '용인' ], '용인': [ '서울', '수원' ], '수원': [ '용인' ] }

g.removeVertex("서울");

console.log(g); // adjacencyList: { '용인': [ '수원' ], '수원': [ '용인' ] }
