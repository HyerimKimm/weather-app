import './App.css';
import Home from './Pages/Home.js'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
