import { Component } from "react"
import GameBoard from "./Components/GameBoard/GameBoard"
import Player from "./Components/Player"
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
      newFields[row][col] = this.players[this.currentPlayerNumber]
      this.setState({ gameFields: newFields })
      this.currentPlayerNumber = (this.currentPlayerNumber + 1) % 2

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

// function App() {
//   const players = [
//     new Player("Kreuz","X"), 
//     new Player("Kreis","O")
//   ]

//   function handleMove(row: number, column: number) {
//     gameFields[row][column] = players[1]
//   }

//   const gameFields: Player[][] = Array(4).fill(null).map(() => Array(4).fill(null))

//   return (
//     <>
//      <div className="page">
//       <GameBoard onCellClick={handleMove} gameFields={gameFields} />
//      </div>
//     </>
//   )
// }

export default App
