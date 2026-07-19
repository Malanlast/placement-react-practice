import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";
function Practice2(){
	const name=useContext(UserContext);
	return(
		<>
			<h1>Practice 2</h1>
			<p>Hello! {name}</p>
		</>
	)
};
export default Practice2;