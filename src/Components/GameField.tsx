import { Component } from "react"

class GameField extends Component {
    private static readonly NUM_ROWS = 4
    private static readonly NUM_COLUMNS = 4

    private gameCells: any[] = []

    render() {
        for(let row = 0; row < GameField.NUM_ROWS; row++) {
            for(let column = 0; column < GameField.NUM_COLUMNS; column++) {
                this.gameCells.push(
                    <div className="game-cell"></div>
                )
            }
        }

        return (
            <div className="game-field">
                {this.gameCells}
            </div>
        )
    }
}

export default GameField