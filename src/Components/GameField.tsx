import { Component } from "react"
import './GameField.css'

class GameField extends Component {
    private static readonly NUM_ROWS = 4
    private static readonly NUM_COLUMNS = 4

    render() {
        const cells = []

        for(let row = 0; row < GameField.NUM_ROWS; row++) {
            for(let column = 0; column < GameField.NUM_COLUMNS; column++) {
                cells.push(
                    <div className="game-cell">X</div>
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

export default GameField