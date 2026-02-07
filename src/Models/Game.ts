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

  private verticalTest(player: Player, row: number, col: number, direction: number) {
    let c = 0
    for(let i = 1; i <= 2; i++) {
      c = this.gameFields[row+(i*direction)][col] == player ? c + 1 : 0
    }

    return c == 2
  }

  private horizontalTest(player: Player, row: number, col: number, direction: number) {
    let c = 0
    for(let i = 1; i <= 2; i++) {
      c = this.gameFields[row][col+(i*direction)] == player ? c + 1 : 0
    }

    return c == 2
  }

  checkPlayerHasLost(player: Player, row: number, col: number) {
    // Nach oben testen
    if (row > 1) {
      if (this.verticalTest(player, row, col, -1)) {
        return true
      }
    }

    // Nach unten testen
    if (row < 2) {
      if (this.verticalTest(player, row, col, 1)) {
        return true
      }
    }

    // Nach rechts testen
    if (col < 2) {
       if (this.horizontalTest(player, row, col, 1)) {
        return true
      }

      // Rechts oben
      if (row > 1) {
        let n = 0
        for(let i = 1; i <= 2; i++) {
           n = this.gameFields[row-i][col+i] == player ? n + 1 : 0
        }
        
        if (n == 2) {
          return true
        }
      }
      // Rechts unten
      if (row < 2) {
        let n = 0
        for(let i = 1; i <= 2; i++) {
           n = this.gameFields[row+i][col+i] == player ? n + 1 : 0
        }
        
        if (n == 2) {
          return true
        }
      }
    }

    // Nach links testen
    if (col >= 0) {
       if (this.horizontalTest(player, row, col, -1)) {
        return true
      }
    }

    // Nach unten und oben testen
    if (row == 1 || row == 2) {
      if ((
        this.gameFields[row+1][col] == player &&
        this.gameFields[row-1][col] == player
      )) {
        return true
      }
    }

    // Nach links und rechts testen
    if (col == 1 || col == 2) {
      if ((
        this.gameFields[row][col+1] == player &&
        this.gameFields[row][col-1] == player
      )) {
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