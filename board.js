class Board {
  constructor() {
    this.piece = null;
  }
  
  // Сбрасывает игровое поле перед началом новой игры
  reset() {
    this.grid = this.getEmptyBoard();
    console.log(this.grid)
  }
  
  // Создает матрицу нужного размера, заполненную нулями
  getEmptyBoard() {
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }

  //проверка на столкновения
  insideWalls(x) {
    return x >= 0 && x < COLS;
  }

  aboveFloor(y) {
    return y <= ROWS;
  }

  // не занята ли клетка поля другими фигурками
  noOccupied(x, y) {
    return this.grid[y] && this.grid[y][x] === 0;
  }

  valid(p) {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;

        return value === 0 ||
          (this.insideWalls(x) && this.aboveFloor(y) && this.noOccupied(x, y));
      })
    })
  }
}