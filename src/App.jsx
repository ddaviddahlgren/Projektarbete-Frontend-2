import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Todos from './pages/todos/Todos'
import Events from './pages/events/Events'
import { EventProvider } from './context/EventContext'
import Habits from './pages/habits/Habits'


function App() {

  return (
    <>
    <EventProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/habits" element={<Habits />} />
        <Route path='/todos' element={<Todos/>} />     {/* Manau gör Todos <Route></Route> */}
        <Route path='/events' element={<Events/>} />   {/* Oscar gör Event Planner <Route></Route> */}
        {/* <Route path='*' element={} /> */}
        {/* Manau gör Todos <Route></Route> */}
        {/* Oscar gör Event Planner <Route></Route> */}
      </Routes>
    </Router>
    </EventProvider>
    </>
  )
}

export default App
