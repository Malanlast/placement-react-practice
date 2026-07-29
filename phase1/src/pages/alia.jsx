function Alia({work,age,nums,user,greet,children}) {
	return (
		<>
			<h3>Alia Bhatt</h3>
			<p>{age}</p>
			<p>{work}</p>
             {/* map array */}
			<p>{nums.map((num)=>(
				<li>{num}</li>
			))}</p>
             {/* obj */}
            <p>
			name: {user.name}<br/>
			age: {user.age}<br/>
			profession: {user.profession}
			</p>
            {/* function */}
			<button onClick={greet}>greet</button>

			{/* passing data back to parent */}
			<button onClick={()=>greet("Alia")}>greet2</button>

             {/* children */}
			 <p>children</p>
			 {children}
		</>
	)
};

export default Alia;
   
//what we learn

// Remember:
// props → Pass individual values (name, age, price)
// children → Pass the entire JSX/content between the tags.

// Interview Questions
// What are props?
// Props are read-only values passed from a parent component to a child component.

// Can a child modify props?
// No. Props are immutable (read-only).

// Can we pass functions as props?
// Yes. This allows child components to notify or interact with the parent.

// What is props.children?
// It represents the JSX nested inside a component's opening and closing tags.

// Props or State—which should you use?
// Use props for data passed from a parent. Use state for data that the component itself owns and updates.
