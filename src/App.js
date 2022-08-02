import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login.js';
import { Menu } from './pages/Menu/Menu';

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/menu' element={<Menu />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
