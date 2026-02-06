import Player from "./Player"

class Game {
  players = [
    new Player("Kreuz","X"), 
    new Player("Kreis","O")
  ]

  currentPlayerNumber: number = 0
  round: number = 0

  gameFields: Player[][] = Array(4).fill(null).map(() => Array(4).fill(null))

  makeMove(row: number, col: number) {
    if (this.gameFields[row][col] == null) {
      this.gameFields[row][col] = this.players[this.currentPlayerNumber]
      this.round++;
      this.currentPlayerNumber = (this.currentPlayerNumber + 1) % 2
    }
  }
}

export default Game