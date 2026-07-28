import { useEffect, useState } from 'react';
import './App.css'
import socket from "./socket.js";
function App() {
  const[message, setMessage]=useState("");
  const[messages, setMessages]=useState([]);
  const[name, setName]=useState("");
  useEffect(()=>{
    socket.on("message",(msg)=>{
      setMessages((prevMsg)=>[...prevMsg,msg]);
    });

    return ()=>{
      socket.off("message");
    };

  },[]);

  function sendMessage(){
    const data={
      name,
      message
    }
    socket.emit("message",data);
    setMessages((prevMsg)=>[...prevMsg,data]);//store sender message
    setMessage("");
  }
  return (
    <>
      <h1>Socket.IO</h1>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
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
          <p key={idx}><strong>{msg.name} :</strong>{msg.message}</p>
        ))
      }
    </>
  )
};

export default App;
