let board;
let engine;
let bot1;
let bot2;

function startGame() {

  engine = new GameEngine();

  bot1 = new DarkOnWeakBot();
  bot2 = new RandomBot("Bot_2");

  board = Chessboard('board', {
    position: 'start',
    draggable: false
  });

  document.getElementById("status").innerText = "Game started";

  loop();
}

async function loop() {

  if (engine.isGameOver()) {
    document.getElementById("status").innerText = "Game Over";
    return;
  }

  const currentBot = engine.turn() === "w" ? bot1 : bot2;

  const move = currentBot.getMove(engine);

  engine.move(move);
  board.position(engine.getFen());

  document.getElementById("status").innerText =
    currentBot.name + " played " + move;

  setTimeout(loop, 300);
}
