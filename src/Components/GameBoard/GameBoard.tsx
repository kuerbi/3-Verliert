import { Component } from "react"
import './GameBoard.css'

class GameBoard extends Component {
    private static readonly NUM_ROWS = 4
    private static readonly NUM_COLUMNS = 4

    render() {
        const cells = []

        for(let row = 0; row < GameBoard.NUM_ROWS; row++) {
            for(let column = 0; column < GameBoard.NUM_COLUMNS; column++) {
                cells.push(
                    <div className="game-cell"></div>
                )
            }
        }

        return (
            <div className="game-field">
                {cells}
            </div>
        )
    }
}

export default GameBoard