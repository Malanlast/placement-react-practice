import { useNavigate } from "react-router-dom";

function Shio() {
	const navigate=useNavigate();

	function goOnProfile(){
		navigate("/profile/shio");
	};
	
	return (
		<>
			<h1>Page of Shio</h1>
			<button onClick={goOnProfile}>profile</button>
		</>
	)
};

export default Shio;
