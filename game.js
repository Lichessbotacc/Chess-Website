class GameEngine {
  constructor() {
    this.game = new Chess();
  }

  move(m) {
    return this.game.move(m);
  }

  fen() {
    return this.game.fen();
  }

  moves() {
    return this.game.moves();
  }

  turn() {
    return this.game.turn();
  }

  over() {
    return this.game.game_over();
  }
}
