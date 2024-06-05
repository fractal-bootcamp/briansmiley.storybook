import "./index.css"
import HeatGrid from "./stories/MyComponents/HeatGrid"

const mockHeatGrid = Array(5).fill(0).map( () => Array.from({length: 7}, () => (Math.round(Math.random() * 100))))

function App() {

  return (
    <>
      <HeatGrid gridValues={mockHeatGrid}/>
    </>
  )
}

export default App
