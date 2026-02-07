import { expect, test, describe, it } from 'vitest'
import Game from './Game'

describe("Game", () => {
    it("player has lost in right direction", () => {
      let game: Game = new Game()
        for(let c = 0; c < 2; c++) {
          for(let r = 0; r < game.gameField.length; r++) {
            for(let v = 0; v < 3; v++) {
              game.gameField[r][c+v] = "X"
            }
            expect(game.checkPlayerHasLost(game.players[0], r, c)).toBe(true)
            game.gameField = [
              [null,null,null,null],
              [null,null,null,null],
              [null,null,null,null],
              [null,null,null,null],
            ]
          }

        }      
    })
})

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3)
})