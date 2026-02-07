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

  // Prüft die Nachbarn
  private checkNeighbours(player: Player, row: number, col: number, dirRow: -1 | 0 | 1, dirCol: -1 | 0 | 1) {
    let n = 0

    for(let i = 1; i <= 2; i++) {
      n = this.gameField[row + i*dirRow][col + i * dirCol] == player.symbol ? n + 1 : 0
    }
    
    return n == 2
  }

  // Um das Mittelfeld zu prüfen
  private checkNeighboursMiddle(player: Player, row: number, col: number, dirRow: -1 | 0 | 1, dirCol: -1 | 0 | 1) {
    return (
      this.gameField[row - 1 * dirRow][col - 1 * dirCol] == player.symbol &&
      this.gameField[row + 1 * dirRow][col + 1 * dirCol] == player.symbol
    )
  }

  checkPlayerHasLost(player: Player, row: number, col: number): Boolean {
    // Nach oben testen
    if (row > 1) {
      if (this.checkNeighbours(player, row, col, -1, 0)) {
        return true
      }
    }

    // Nach unten testen
    if (row < 2) {
      if (this.checkNeighbours(player, row, col, 1, 0)) {
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
    if (col >= 2) {
      if (this.checkNeighbours(player, row, col, 0, -1)) {
        return true
      }

      // links oben
      if (row > 1) {
        if (this.checkNeighbours(player, row, col, -1, -1)) {
          return true
        }
      }
      
      // links unten
      if (row < 2) {
        if (this.checkNeighbours(player, row, col, 1, -1)) {
          return true
        }
      }
    }

    // Mittelfeld Testen
    if ((row == 1 || row == 2) && (col == 1 || col == 2)) {
      // Nach unten und oben testen
      if (this.checkNeighboursMiddle(player, row, col, 1, 0)) {
        return true
      }
      
      // Nach links und rechts testen
      if (this.checkNeighboursMiddle(player, row, col, 0, 1)) {
        return true
      }

      // Diagonalen testen
      if (this.checkNeighboursMiddle(player, row, col, -1, 1)) {
        return true
      }

      if (this.checkNeighboursMiddle(player, row, col, 1, 1)) {
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