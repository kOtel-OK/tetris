class Board {
  constructor() {
    this.piece = null;
  }

  // Reset the board before new game
  reset() {
    this.grid = this.getEmptyBoard();
  }

  //Create the matrix appropriate size filled with nulls
  getEmptyBoard() {
    console.log({length: ROWS});
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }

}