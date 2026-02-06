import { Component } from "react"
import GameBoard from "./Components/GameBoard/GameBoard"
import Player from "./Models/Player"
import './App.css'

type AppState = {
  gameFields: Player[][]
}
class App extends Component<{}, AppState> {
  players = [
    new Player("Kreuz","X"), 
    new Player("Kreis","O")
  ]

  currentPlayerNumber: number = 0
  round: number = 0

  constructor(props: {}) {
    super(props)

    const gameFields: Player[][] = Array(4).fill(null).map(() => Array(4).fill(null))

    this.state = {
      gameFields: gameFields
    }

    this.handleMove = this.handleMove.bind(this)
  }

  handleMove(row: number, col: number) {
    const newFields = this.state.gameFields.map(r => [...r]);

    if (newFields[row][col] == null) {
      // Update GameField
      newFields[row][col] = this.players[this.currentPlayerNumber]
      this.setState({ gameFields: newFields })

      this.checkLost(row,col);

      // switch player
      this.currentPlayerNumber = (this.currentPlayerNumber + 1) % 2

      this.round++;
    }
  }

  checkLost(row: number, col: number) {
    const gameField = this.state.gameFields
    let countSymbols = 0

    if(this.round >= 15) {
      alert("Unentschieden")
    }

    if (this.round > 0 /* 4 */) {
      if (row > 1) {
        countSymbols = 0
        for(let c = 1; c < 3; c++) {
          const checkField = gameField[row-c][col]

          if(checkField != null && checkField.symbol == this.players[this.currentPlayerNumber].symbol) {
            countSymbols++;
          }
        }

        alert(countSymbols)

        if(countSymbols > 2) {
          alert("Spieler " + this.players[this.currentPlayerNumber].name + " hat verloren")
        }
      }
    }

 
  }

  render() {
    return (
     <>
     <div className="page">
      <GameBoard 
        gameFields={this.state.gameFields} 
        onCellClick={this.handleMove}  
      />
     </div>
    </>
    )
  }
}

export default App
