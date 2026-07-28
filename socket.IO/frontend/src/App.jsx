import { useEffect, useState } from 'react';
import './App.css'
import socket from "./socket.js";
function App() {
  const[message, setMessage]=useState("");
  const[messages, setMessages]=useState([]);
   
  useEffect(()=>{
    socket.on("message",(msg)=>{
      setMessages((prevMsg)=>[...prevMsg,msg]);
    });

    return ()=>{
      socket.off("message");
    };

  },[]);

  function sendMessage(){
    socket.emit("message",message);
    setMessages((prevMsg)=>[...prevMsg,message]);//store sender message
    setMessage("");
  }
  return (
    <>
      <h1>Socket.IO</h1>
      <input/>
      <br/>
      <input
        type="text"
        placeholder="message"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>send</button>
      <hr/>
      {
        messages.map((msg,idx)=>(
          <p key={idx}>{msg}</p>
        ))
      }
    </>
  )
};

export default App;
