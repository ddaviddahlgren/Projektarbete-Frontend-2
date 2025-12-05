import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Habits from './pages/habits/Habits'
import Todos from './pages/todos/Todos'
import Events from './pages/events/Events'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/habits' element={<Habits/>} />   {/* David gör Habits <Route></Route> */}
        <Route path='/todos' element={<Todos/>} />     {/* Manau gör Todos <Route></Route> */}
        <Route path='/events' element={<Events/>} />   {/* Oscar gör Event Planner <Route></Route> */}
        {/* <Route path='*' element={} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
