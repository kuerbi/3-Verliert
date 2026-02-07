import { Component } from "react"
import GameBoard from "./Components/GameBoard/GameBoard"
import Game from './Models/Game'
import Player, { type FieldSymbol } from "./Models/Player"
import './App.css'

type AppState = {
    gameField: FieldSymbol[][]
}
class App extends Component<{}, AppState> {
  game = new Game()

  constructor(props: {}) {
    super(props)

    this.state = {
      gameField: this.game.gameField
    }

    this.handleMove = this.handleMove.bind(this)
  }

  handleMove(row: number, col: number) {
    this.game.makeMove(row, col)
    this.setState({ gameField: [...this.game.gameField.map(row => [...row])] })
  }

  render() {
    return (
     <>
     <div className="page">
      <GameBoard 
        gameField={this.state.gameField} 
        onCellClick={this.handleMove}  
      />
     </div>
    </>
    )
  }
}

export default App
