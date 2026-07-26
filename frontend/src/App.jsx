import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const[students,setStudents]=useState([]);
  const[form,setForm]=useState({
    name:"",
    age:"",
    course:""
  });
  const[editId,setEditId]=useState(null);
  const[search, setSearch]=useState("");
  useEffect(()=>{
    axios.get("http://localhost:3000/student")
    .then((res)=>
      setStudents(res.data))
    .catch((err)=>
      console.log(err))
  },[]);

  function handleChange(e){
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  };

 async function handleSubmit(e){
    e.preventDefault();
    try{
      if(editId){
        await axios.put(`http://localhost:3000/student/${editId}`,form);
         setStudents((prevStudent)=>
          prevStudent.map((student)=>
          student._id==editId
          ?{...student,...form}
          :student));
        setEditId(null);
      }else{
      const res= await axios.post("http://localhost:3000/student",form);
      console.log(res.data);
      setStudents([...students,res.data]);
      setForm({
        name:"",
        age:"",
        course:""
      });
    }
    }
    catch(err){
      console.log(err);
    }
  };

  async function deleteStudent(id){
    try{
    await axios.delete(`http://localhost:3000/student/${id}`)
    setStudents((prevStudents)=>prevStudents.filter(
      (student)=>student._id !== id)
    );
    }catch(err){
      console.log(err);
    }
  };

  async function editStudent(student){
    try{
      setForm({
        name:student.name,
        age:student.age,
        course:student.course
      });
      setEditId(student._id);
    }catch(err){
      console.log(err);
    }
  };

  
  return (
    <>
      <h1>Hi welcome to frontend or backend connectivity </h1>
      <hr/>

      <input
        type="text"
        placeholder="search name"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div> 
        {students
        .filter((student)=>
        student.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((student)=>(
          <div style={{background:"pink"}} key={student._id}>
            <h3 style={{background:"blue", color:"white"}}>name: {student.name}</h3>
            <h3>age: {student.age}</h3>
            <h3>course: {student.course}</h3>

            <button onClick={()=>deleteStudent(student._id)}>delete</button>
            <button onClick={()=>editStudent(student)}>edit</button>
          </div>
        ))}
      </div>
      <hr/>
      <h1>add student</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
          name="name"
          required
        />
        <br/>
        <input
          type="Number"
          placeholder="age"
          value={form.age}
          onChange={handleChange}
          name="age"
          required
        />
        <br/>
        <input
          type="text"
          placeholder="course"
          value={form.course}
          onChange={handleChange}
          name="course"
          required
        />
        <br/>
        <button>{editId ? "update" : "add"}</button>
      </form>
    </>
  )
}

export default App;
