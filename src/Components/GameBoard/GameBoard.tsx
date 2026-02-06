import { Component } from "react"
import type Player from "../../Models/Player"
import './GameBoard.css'

type GameBoardProps = {
    gameFields: (Player | null)[][]
    onCellClick: (row: number, column: number) => void
}
class GameBoard extends Component<GameBoardProps> {
    render() {
        return (
            <div className="game-board">
                {this.props.gameFields.map((row, rowIndex) => 
                    row.map((cell, colIndex) => (
                        <div 
                            key={rowIndex * this.props.gameFields[0].length + colIndex} 
                            className="game-cell" 
                            onClick={() => this.props.onCellClick(rowIndex,colIndex)}
                        >{cell?.symbol}</div>
                    ))
                )}
            </div>
        )
    }
}

export default GameBoard