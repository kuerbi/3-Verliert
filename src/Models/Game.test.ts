import { expect, test, describe, it, beforeEach } from 'vitest'
import Game from './Game'

describe("Game", () => {
    let game: Game = new Game()


    beforeEach(() => {
      game = new Game()
      game.gameField = Array(4).fill(null).map(() => Array(4).fill(null))
    })

    it("player has lost in right direction", () => {
        for(let c = 0; c < 2; c++) {
          for(let r = 0; r < game.gameField.length; r++) {
            for(let v = 0; v < 3; v++) {
              game.gameField[r][c+v] = "X"
            }
            expect(game.checkPlayerHasLost(game.players[0], r, c)).toBe(true)
            game.gameField = Array(4).fill(null).map(() => Array(4).fill(null))

          }
        }      
    })

    it("player has lost in left direction", () => {
      for(let c = 3; c > 1; c--) {
        for(let r = 0; r < game.gameField.length; r++) {
          for(let v = 0; v < 3; v++) {
            game.gameField[r][c-v] = "X"
          }
          expect(game.checkPlayerHasLost(game.players[0], r, c)).toBe(true)
          game.gameField = Array(4).fill(null).map(() => Array(4).fill(null))
        }
      }      
    })
})

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3)
})