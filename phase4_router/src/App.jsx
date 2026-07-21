 import './App.css';
 import shio from "./pages/shio.jsx";
 import alia from "./pages/alia.jsx";
 import profile from "./pages/profile.jsx";
 import NotFound from "./pages/NotFound.jsx";
 import Home from "./pages/Home.jsx";
import { Route, Routes } from 'react-router-dom';
 function App() { 
  return (
    <>
      <h1>Router</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
