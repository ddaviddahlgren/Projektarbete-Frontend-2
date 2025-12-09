import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import HabitsPage from './pages/HabitsPage'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/habits" element={<HabitsPage />}></Route>
        {/* Manau gör Todos <Route></Route> */}
        {/* Oscar gör Event Planner <Route></Route> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
