import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Todos from './pages/todos/Todos'
import Events from './pages/events/Events'
import { EventProvider } from './context/EventContext'
import Habits from './pages/habits/Habits'
import { TodoProvider } from './context/todos/TodoContext'

function App() {

  return (
    <>
    <EventProvider>
      <TodoProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/habits" element={<Habits />} />
            <Route path='/todos' element={<Todos/>} />    
            <Route path='/events' element={<Events/>} />  
          </Routes>
        </Router>
      </TodoProvider>
    </EventProvider>
    </>
  )
}

export default App
