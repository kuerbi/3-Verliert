import Player, { type FieldSymbol } from "./Player"

class Game {
  players = [
    new Player("Kreuz","X"), 
    new Player("Kreis","O")
  ]

  currentPlayerNumber: number = 0
  round: number = 0

  gameField: FieldSymbol[][] = Array(4).fill(null).map(() => Array(4).fill(null))

  makeMove(row: number, col: number) {
    if (this.gameField[row][col] == null) {
      this.gameField[row][col] = this.players[this.currentPlayerNumber].symbol
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
      c = this.gameField[row+(i*direction)][col] == player.symbol ? c + 1 : 0
    }

    return c == 2
  }

  private horizontalTest(player: Player, row: number, col: number, direction: number) {
    let c = 0
    for(let i = 1; i <= 2; i++) {
      c = this.gameField[row][col+(i*direction)] == player.symbol ? c + 1 : 0
    }

    return c == 2
  }

  private diagonalTest(player: Player, row: number, col: number) {
    let n = 0

    for(let i = 1; i <= 2; i++) {
        n = this.gameField[row-i][col+i] == player.symbol ? n + 1 : 0
    }
    
    return n == 2
  }

  // Prüft die Nachbarn
  private checkNeighbours(player: Player, row: number, col: number, dirRow: -1 | 0 | 1, dirCol: -1 | 0 | 1) {
    let n = 0

    for(let i = 1; i <= 2; i++) {
        n = this.gameField[row + i*dirRow][col + i * dirCol] == player.symbol ? n + 1 : 0
    }
    
    return n == 2
  }

  checkPlayerHasLost(player: Player, row: number, col: number): Boolean {
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
       if (this.checkNeighbours(player, row, col, 0, 1)) {
        return true
      }

      // Rechts oben
      if (row > 1) {
        if (this.checkNeighbours(player, row, col, -1, 1)) {
          return true
        }
      }
      // Rechts unten
      if (row < 2) {
        if (this.checkNeighbours(player, row, col, 1, 1)) {
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
        this.gameField[row+1][col] == player.symbol &&
        this.gameField[row-1][col] == player.symbol
      )) {
        return true
      }
    }

    // Nach links und rechts testen
    if (col == 1 || col == 2) {
      if ((
        this.gameField[row][col+1] == player.symbol &&
        this.gameField[row][col-1] == player.symbol
      )) {
        return true
      }
    }

    return false
  }

  isDraw() {
    return this.gameField.every(
        row => row.every(cell => cell !== null)
    )
  }
}

export default Game