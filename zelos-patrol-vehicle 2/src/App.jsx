import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Police from './Police'
import TrafficPolice from './TrafficPolice'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/police" element={<Police />} />
        <Route path="/traffic" element={<TrafficPolice />} />
      </Routes>
    </Router>
  )
}

export default App

