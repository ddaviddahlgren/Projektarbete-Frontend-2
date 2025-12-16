import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Todos from "./pages/todos/Todos";
import Events from "./pages/events/Events";
import { EventProvider } from "./context/EventContext";
import Habits from "./pages/habits/Habits";
import { HabitsProvider } from "./context/HabitsContext";
import { TodoProvider } from './context/todos/TodoContext'
import Login from "./pages/login/Login";
import { UserProvider } from "./context/users/UserContext";



function App() {
  return (
    <>
      <UserProvider>
      <EventProvider>
        <HabitsProvider>
          <TodoProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/habits" element={<Habits />} />
              <Route path="/todos" element={<Todos />} />              
              <Route path="/events" element={<Events />} />
            </Routes>
          </Router>
          </TodoProvider>
        </HabitsProvider>
      </EventProvider>
      </UserProvider>
    </>
  );
}

export default App;
