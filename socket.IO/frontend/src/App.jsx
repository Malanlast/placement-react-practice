import { useEffect } from 'react';
import './App.css'
import socket from "./socket.js";
function App() {

  useEffect(()=>{
    console.log(socket);
  },[]);
  return (
    <>
      <h1>Socket.IO</h1>
    </>
  )
};

export default App;
