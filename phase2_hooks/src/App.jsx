import {useState} from "react";
function App() {
  const [count, setCount]=useState(0);
  return (
     <>
      <h1>Hooks</h1>
      <p>useState()</p>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>
      increase
      </button>
     </>
  )
}

export default App
