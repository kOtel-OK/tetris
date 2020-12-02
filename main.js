const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

//set canvas size
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//set scale
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board;

function play() {
  board.reset();
  let piece = new Piece(ctx);

  piece.draw();

  board.piece = piece;
  console.log(board.grid);
}





document.querySelector('.play-button').addEventListener('click', play);