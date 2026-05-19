class RandomBot {

  constructor(name) {
    this.name = name;
  }

  getMove(game) {
    const moves = game.moves();
    return moves[Math.floor(Math.random() * moves.length)];
  }

}

class DarkOnWeakBot extends RandomBot {
  constructor() {
    super("DarkOnWeakBot");
  }
}
