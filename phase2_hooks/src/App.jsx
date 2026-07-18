import {useState, useEffect, useRef} from "react";
function App() {
  const [count, setCount]=useState(0);
  const [array, setArray]=useState([10,20,30,40]);
  const [user, setUser]=useState({
    name:"Shio",
    age:"22",
  });
  const [jock, setJock]=useState({
    type:"",
    setup:"",
    punchline:"",
  });
  const inputRef=useRef();
  let url="https://official-joke-api.appspot.com/random_joke";

  function getJock(){
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    setJock(data);
  });
  }

  useEffect(()=>{
    getJock();
  },[]);
   
  function showInput(){
    alert(inputRef.current.value);
  }

  return (
     <>
      <h1>Hooks</h1>
      <p>useState()</p><hr/>
      {/* count */}
      <p>{count}</p>
      <button onClick={()=>setCount(prev=>prev+1)}>
      increase
      </button><hr/>
      {/* add array */}
      <p>{array.map((index,arr)=>(
        <li key={index}>{arr}</li>
      ))}
      </p>
      <button onClick={()=>setArray([...array,50,60])}>add</button><hr/>
      {/* update obj */}
      <p>name: {user.name}, age:{user.age}</p>
      <button onClick={()=>(setUser({...user,age:33,name:"Alia"}))}>updated</button><hr/>
      {/*useEffect*/}
          <p>{jock.type}</p>
          <p>{jock.setup}</p>
          <p>{jock.punchline}</p>
          <button onClick={getJock}>new jock</button><hr/>
          {/* useRef */}
          <input ref={inputRef}/>
          <button onClick={showInput}>show</button>
     </>
  )
}

export default App
