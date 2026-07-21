import { useParams } from "react-router-dom";

function Profile(){
	const {id}=useParams();
	return(
		<>
		<h1>Profie page</h1>
		<p>Profile of {id}</p>
		</>
	)
};
export default Profile;