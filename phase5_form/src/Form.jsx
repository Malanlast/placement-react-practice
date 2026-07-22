import { useState } from "react"

 
 function Form() {
	const [form, setForm]=useState({
		name:"",
		email:"",
		password:"",
	});
	const[agree,setAgree]=useState(false);
    const[city, setCity]=useState("");
	function handleChange(e){
		setForm({
			...form,
			[e.target.name]:e.target.value,
		});
		
	};
    
	function handleSubmit(e){
		e.preventDefault();
		console.log("name: "+form.name+" "
			+"email: "+form.email+
			" password: "+form.password);
		setForm({
			name:"",
			email:"",
            password:"",
		});
	}

	return (
		<>
			<h1>Form</h1>

			<form onSubmit={handleSubmit} >

				 <input 
				    type="text"
					name="name"
					placeholder="name"
					value={form.name}
                    onChange={handleChange}
				 /><br/><br/>

				 <input
					type="text"
					name="email"
					placeholder="email"
					value={form.email}
					onChange={handleChange}
				 /><br/><br/>

				 <input 
					type="password"
					name="password"
					placeholder="password"
					value={form.password}
					onChange={handleChange}
				 /><br/><br/>

				 <select
					value={city}
					onChange={(e)=>setCity(e.target.value)}
				 >
				 <option value="Chennai">Chennai</option>
				 <option value="Mumbai">Mumbai</option>
				 <option value="Kolkata">Kolkata</option>
				 <option value="Rajsthan">Rajsthan</option>
				 </select>
					<p>Selected city: {city}</p>
				 <br/>

				 <input
					type="checkbox"
					checked={agree}
					onChange={(e)=>setAgree(e.target.checked)}
				 /><br/>
				<button>submit</button>
			</form>
			
		</>
	)
}

export default Form
