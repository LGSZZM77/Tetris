// prettier-ignore
const BLOCKS = {
  square: [
    [[0, 0],[0, 1],[1, 0],[1, 1]],
    [[0, 0],[0, 1],[1, 0],[1, 1]],
    [[0, 0],[0, 1],[1, 0],[1, 1]],
    [[0, 0],[0, 1],[1, 0],[1, 1]],
  ],
  bar: [
    [[1, 0],[2, 0],[3, 0],[4, 0]],
    [[2, -1],[2, 0],[2, 1],[2, 2]],
    [[1, 0],[2, 0],[3, 0],[4, 0]],
    [[2, -1],[2, 0],[2, 1],[2, 2]],
  ],
  tree: [
    [[1, 0],[0, 1],[1, 1],[2, 1]],
    [[1, 0],[0, 1],[1, 1],[1, 2]],
    [[2, 1],[0, 1],[1, 1],[1, 2]],
    [[2, 1],[1, 2],[1, 1],[1, 0]],
  ],
  zee: [
    [[0, 0],[1, 0],[1, 1],[2, 1]],
    [[0, 1],[1, 0],[1, 1],[0, 2]],
    [[0, 1],[1, 1],[1, 2],[2, 2]],
    [[2, 0],[2, 1],[1, 1],[1, 2]],
  ],
  elLeft: [
    [[0, 0],[0, 1],[1, 1],[2, 1]],
    [[1, 0],[1, 1],[1, 2],[0, 2]],
    [[0, 1],[1, 1],[2, 1],[2, 2]],
    [[1, 0],[2, 0],[1, 1],[1, 2]],
  ],
  elRight: [
    [[1, 0],[2, 0],[1, 1],[1, 2]],
    [[0, 0],[0, 1],[1, 1],[2, 1]],
    [[0, 2],[1, 0],[1, 1],[1, 2]],
    [[0, 1],[1, 1],[2, 1],[2, 2]],
  ],
};

export default BLOCKS;
