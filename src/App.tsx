import { Component } from "react"
import GameBoard from "./Components/GameBoard/GameBoard"
import Game from './Models/Game'
import Player from "./Models/Player"
import './App.css'

type AppState = {
    gameFields: Player[][]
}
class App extends Component<{}, AppState> {
  game = new Game()

  constructor(props: {}) {
    super(props)

    this.state = {
      gameFields: this.game.gameFields
    }

    this.handleMove = this.handleMove.bind(this)
  }

  handleMove(row: number, col: number) {
    this.game.makeMove(row, col)
    this.setState({ gameFields: [...this.game.gameFields.map(row => [...row])] })
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
