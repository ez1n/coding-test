/**
 * 다익스트라 알고리즘 (Dijkstra)
 *
 * 우선 순위 큐 (Priority Queue)
 */

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex] || [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const dist = {};
    const prev = {};
    let path = [];
    let smallest;

    // 초기 상태 설정
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        dist[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        dist[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      prev[vertex] = null;
    }

    // 방문할 정점이 남아있는 경우
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        // 반환값 작성
        while (prev[smallest]) {
          path.push(smallest);
          smallest = prev[smallest];
        }
        break;
      }

      if (smallest || dist[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // 인접점 찾기
          let nextNode = this.adjacencyList[smallest][neighbor];

          // 인접점들간의 새로운 거리 계산
          let candidate = dist[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < dist[nextNeighbor]) {
            // 최단 거리 업데이트
            dist[nextNeighbor] = candidate;
            // 이전 경로 업데이트
            prev[nextNeighbor] = smallest;
            // 우선순위 큐에 enqueue
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("E", "B", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E")); // [ 'A', 'C', 'D', 'F', 'E' ]
