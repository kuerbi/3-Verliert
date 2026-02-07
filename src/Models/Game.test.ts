import { expect, test, describe, it } from 'vitest'
import Game from './Game'

describe("Game", () => {
    it("player has lost right direction", () => {
       let game: Game = new Game()
       
       let gameField = [
        ["X","X","X","O"]
        ["X","X","X","O"]
        ["X","X","X","O"]
        ["X","X","X","O"]
       ]
    })
})

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3)
})