# 深度优先搜索(DFS)和广度优先搜索(BFS)

深度优先搜索（DFS）和广度优先搜索（BFS）是两种常用的图遍历算法，它们不仅在图论中有应用，在树的遍历中也非常常见。

### 深度优先搜索（DFS）

深度优先搜索是一种先沿着图的深度遍历顶点的算法。具体来说，在遍历过程中，从起始顶点开始，递归地访问该顶点的邻接顶点，直到到达最深处，然后回溯到上一个未访问的顶点，继续递归遍历。

#### 思路：

1. 从起始顶点开始进行深度优先搜索。
2. 访问当前顶点，并标记为已访问。
3. 递归地访问当前顶点的邻接顶点，直到所有邻接顶点都被访问过为止。

#### 代码示例（JavaScript）：

```javascript
function dfs(graph, vertex, visited) {
  visited[vertex] = true // 标记当前顶点为已访问
  console.log(vertex) // 输出当前顶点

  // 遍历当前顶点的邻接顶点
  for (const neighbor of graph[vertex]) {
    if (!visited[neighbor]) {
      dfs(graph, neighbor, visited) // 递归访问邻接顶点
    }
  }
}

// 示例图的邻接表表示
const graph = {
  0: [1, 2],
  1: [3],
  2: [4],
  3: [],
  4: [],
}

const visited = Array(Object.keys(graph).length).fill(false) // 记录顶点是否已访问
dfs(graph, 0, visited) // 从顶点 0 开始进行深度优先搜索
```

### 广度优先搜索（BFS）

广度优先搜索是一种从根节点开始沿着树或图的宽度遍历顶点的算法。具体来说，在遍历过程中，从起始顶点开始，依次访问该顶点的所有相邻顶点，然后依次访问这些相邻顶点的相邻顶点，依此类推，直到所有顶点都被访问过。

#### 思路：

1. 从起始顶点开始进行广度优先搜索。
2. 将起始顶点加入队列，并标记为已访问。
3. 循环直到队列为空，每次出队一个顶点，将其未访问的邻接顶点加入队列并标记为已访问。

#### 代码示例（JavaScript）：

```javascript
function bfs(graph, start) {
  const visited = Array(Object.keys(graph).length).fill(false) // 记录顶点是否已访问
  const queue = [start] // 初始化队列，起始顶点入队
  visited[start] = true // 标记起始顶点为已访问

  while (queue.length > 0) {
    const vertex = queue.shift() // 出队一个顶点
    console.log(vertex) // 输出当前顶点

    // 遍历当前顶点的邻接顶点
    for (const neighbor of graph[vertex]) {
      if (!visited[neighbor]) {
        queue.push(neighbor) // 邻接顶点入队
        visited[neighbor] = true // 标记邻接顶点为已访问
      }
    }
  }
}

// 示例图的邻接表表示
const graph = {
  0: [1, 2],
  1: [3],
  2: [4],
  3: [],
  4: [],
}

bfs(graph, 0) // 从顶点 0 开始进行广度优先搜索
```

这两种算法在遍历图或树时都有其特定的应用场景，具体选择哪种算法取决于问题的需求和性质。
