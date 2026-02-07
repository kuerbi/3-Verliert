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

      const lost = this.checkPlayerHasLost(this.players[this.currentPlayerNumber],row,col)

      if (lost) {
        alert(`${this.players[this.currentPlayerNumber].name} hat verloren`)
      } else if (this.isDraw()) {
        alert("Unentschieden")
        return
      }

      this.currentPlayerNumber = (this.currentPlayerNumber + 1) % 2

      const noMovePossible = this.noMovePossible(this.players[this.currentPlayerNumber])

      if (noMovePossible) {
        alert(`${this.players[this.currentPlayerNumber].name} hat verloren`)
      }
    }
  }

  noMovePossible(player: Player) {
    return false
  }

  checkPlayerHasLost(player: Player, row: number, col: number) {
    // Nach oben testen
    if (row > 1) {
      if ((this.gameFields[row-1][col] == player) && (this.gameFields[row-2][col] == player)) {
        return true
      }
    }
  }

  isDraw() {
    return this.gameFields.every(
        row => row.every(cell => cell !== null)
    )
  }
}

export default Game