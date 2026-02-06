import GameBoard from "./Components/GameBoard/GameBoard"
import Player from "./Components/Player"
import './App.css'

function App() {
  const players = [
    new Player("Kreuz","X"), 
    new Player("Kreis","O")
  ]

  return (
    <>
     <div className="page">
      <GameBoard />
     </div>
    </>
  )
}

export default App
