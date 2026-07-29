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

  function handleKeyDown(e){
    if(e.key==="Enter"){
      sendMessage();
    }
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
        onKeyDown={handleKeyDown}
      />
      <button onClick={sendMessage}>send</button>
      <hr/>
      {
        messages.map((msg,idx)=>(
          <p
           className={name===msg.name?"my-message":"other-message"}
           key={idx}>
          <strong>{msg.name}</strong><br/>
          {msg.message}
          </p>
        ))
      }
    </>
  )
};

export default App;
