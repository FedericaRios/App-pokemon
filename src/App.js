import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Presentation from './pages/presentation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Presentation />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
