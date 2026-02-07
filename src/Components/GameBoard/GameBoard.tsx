import { Component } from "react"
import './GameBoard.css'
import type { FieldSymbol } from "../../Models/Player"

type GameBoardProps = {
    gameField: FieldSymbol[][]
    onCellClick: (row: number, column: number) => void
}
class GameBoard extends Component<GameBoardProps> {
    render() {
        return (
            <div className="game-board">
                {this.props.gameField.map((row, rowIndex) => 
                    row.map((cell, colIndex) => (
                        <div 
                            key={rowIndex * this.props.gameField[0].length + colIndex} 
                            className="game-cell" 
                            onClick={() => this.props.onCellClick(rowIndex,colIndex)}
                        >{cell}</div>
                    ))
                )}
            </div>
        )
    }
}

export default GameBoard