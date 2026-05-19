class GameEngine {

  constructor() {
    this.game = new Chess();
  }

  move(move) {
    return this.game.move(move);
  }

  getFen() {
    return this.game.fen();
  }

  moves() {
    return this.game.moves();
  }

  isGameOver() {
    return this.game.game_over();
  }

  turn() {
    return this.game.turn();
  }

}
