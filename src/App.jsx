import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Todos from "./pages/todos/Todos";
import Events from "./pages/events/Events";
import { EventProvider } from "./context/EventContext";
import Habits from "./pages/habits/Habits";
import { HabitsProvider } from "./context/HabitsContext";

function App() {
  return (
    <>
      <EventProvider>
        <HabitsProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/habits" element={<Habits />} />
              <Route path="/todos" element={<Todos />} />              
              <Route path="/events" element={<Events />} />
            </Routes>
          </Router>
        </HabitsProvider>
      </EventProvider>
    </>
  );
}

export default App;
