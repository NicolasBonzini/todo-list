import logo from './logo.svg';
import './App.css';
//Components
import Login from './components/Login';
import Home from './components/Home';
//React Router
import { Route, Routes } from 'react-router-dom';
import Tareas from './components/Tareas';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/tasks" element={<Tareas />}/>
      </Routes>
    </div>
  );
}

export default App;
