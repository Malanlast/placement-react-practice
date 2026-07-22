import { useState } from "react"

 
 function Form() {
	const [name, setName]=useState("");
    
	function handleSubmit(e){
		e.preventDefault();
		alert(name);
		setName("");
	}

	return (
		<>
			<h1>Form</h1>
			<form onSubmit={handleSubmit} >
				<input
				    type="text"
					value={name}
					onChange={(e)=>setName(e.target.value)}
				/> 
				<button>submit</button>
			</form>
			
		</>
	)
}

export default Form
