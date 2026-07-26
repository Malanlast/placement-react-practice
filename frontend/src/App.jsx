import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const[students,setStudents]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/student")
    .then((res)=>
      setStudents(res.data))
    .catch((err)=>
      console.log(err))
  },[]);

  
  return (
    <>
      <h1>Hi welcome to frontend or backend connectivity </h1>
      <hr/>
      <div> 
        {students.map((student)=>(
          <div key={student._id}>
            <h3>name: {student.name}</h3>
            <h3>age: {student.age}</h3>
            <h3>course: {student.course}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
