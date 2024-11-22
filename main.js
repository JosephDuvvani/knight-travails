const getAdjacent = (vertex) => {
  const [r, c] = vertex;
  const adj = [
    [r - 2, c - 1],
    [r - 2, c + 1],
    [r - 1, c - 2],
    [r - 1, c + 2],
    [r + 1, c - 2],
    [r + 1, c + 2],
    [r + 2, c - 1],
    [r + 2, c + 1],
  ];

  return adj.filter(
    (vrtx) => vrtx[0] >= 0 && vrtx[0] <= 7 && vrtx[1] >= 0 && vrtx[1] <= 7
  );
};

const isValidVertex = (vrtx) => {
  if (vrtx[0] >= 0 && vrtx[0] <= 7 && vrtx[1] >= 0 && vrtx[1] <= 7) return true;
  return false;
};

const knightMoves = (start, end) => {
  if (!isValidVertex(start)) throw new Error("Invalid vertex, 'start'");
  if (!isValidVertex(end)) throw new Error("Invalid vertex, 'end'");
  if (start[0] == end[0] && start[1] == end[1]) return start;

  const queue = [[start]];

  while (queue.length > 0) {
    let path = queue.shift();
    let curr = path[path.length - 1];
    let currAdjacent = getAdjacent(curr);

    for (let vertex of currAdjacent) {
      if (vertex[0] == end[0] && vertex[1] == end[1]) {
        return [...path, vertex];
      }
      queue.push([...path, vertex]);
    }
  }
};

const printPath = (path) => {
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  for (let vertex of path) console.log(vertex);
};

printPath(knightMoves([1, 0], [5, 7]));
