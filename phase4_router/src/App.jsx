 import './App.css';
 import Shio from "./pages/shio.jsx";
 import Alia from "./pages/alia.jsx";
 import Profile from "./pages/profile.jsx";
 import NotFound from "./pages/NotFound.jsx";
 import Home from "./pages/Home.jsx";
import { Route, Routes } from 'react-router-dom';
 function App() { 
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shio" element={<Shio/>}/>
        <Route path="/alia" element={<Alia/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  )
};

export default App;
