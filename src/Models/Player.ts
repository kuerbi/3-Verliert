export type FieldSymbol = "X" | "O" | null

class Player {
    name: string
    symbol: FieldSymbol

    constructor(name: string, symbol: FieldSymbol) {
       this.name = name
       this.symbol = symbol
    }
}

export default Player