import GameField from "./Components/GameField"
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
      <GameField />
      <br />
      <span>{players[0].name} ist dran</span>
     </div>
    </>
  )
}

export default App
