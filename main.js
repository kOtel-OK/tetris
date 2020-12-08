const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const moves = {
  [KEY.LEFT]: p => ({ ...p, x: p.x - 1}),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1}),
  [KEY.DOWN]: p => ({ ...p, x: p.y + 1}),

}

//set canvas size
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//set scale
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board;

function play() {
  board.reset();
  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
  let piece = new Piece(ctx);
  
  piece.draw();
  board.piece = piece;
}


document.addEventListener('keydown', event => {
  if (moves[event.keyCode]) {  
    // отмена действий по умолчанию
    event.preventDefault();
    
    // получение новых координат фигурки
    let p = moves[event.keyCode](board.piece);
    
    // проверка нового положения
    if (board.valid(p)) {    
      // реальное перемещение фигурки, если новое положение допустимо
      board.piece.move(p);
      
      // стирание старого отображения фигуры на холсте
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
      
      board.piece.draw();
    }
  }
});



document.querySelector('.play-button').addEventListener('click', play);