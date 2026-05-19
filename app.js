let board;
let engine;
let bot1;
let bot2;

function startGame() {

  console.log("GAME STARTED");

  engine = new GameEngine();

  bot1 = new DarkOnWeakBot();
  bot2 = new RandomBot("Bot_2");

  board = Chessboard('board', {
    position: 'start',
    draggable: false
  });

  document.getElementById("status").innerText = "Game läuft...";

  loop();
}

async function loop() {

  if (engine.over()) {
    document.getElementById("status").innerText = "Game Over";
    return;
  }

  const currentBot =
    engine.turn() === "w" ? bot1 : bot2;

  const move = currentBot.getMove(engine);

  if (move) {
    engine.move(move);
    board.position(engine.fen());
  }

  document.getElementById("status").innerText =
    currentBot.name + " spielt " + move;

  setTimeout(loop, 400);
}

// 🔥 DAS war dein Hauptfehler
window.startGame = startGame;
