import { Link, useNavigate } from "react-router-dom";
 function Home() {
	const navigate=useNavigate();

	function goSmile(){
		navigate("/smile");
	};

	return (
		<>
			<h1>Home</h1>
			<Link to="/shio">Shio page</Link>
			<br/>
			<Link to="/alia">Alia page</Link>
			<br/>
			<br/>
			<button onClick={goSmile}>Smile</button>
		</>
	)
};

export default Home;
