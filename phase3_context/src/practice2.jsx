import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";
function Practice2(){
	const name=useContext(UserContext);
	return(
		<>
			<h1>Practice 2</h1>
			<p>Hello! {name}</p>

			<p>Interview Definition<br/>
            useContext is a React Hook used to access shared data from a Context without passing props through every intermediate component (avoiding prop drilling).
			</p>
		</>
	)
};
export default Practice2;