import { useNavigate } from "react-router-dom";

function Alia() {
	const navigate=useNavigate();

	function goOnProfile(){
		navigate("/profile/alia");
	};
	return (
		<>
			<h1>
				Page of Alia
			</h1>
			<button onClick={goOnProfile}>profile</button>
		</>
	)
};

export default Alia;
