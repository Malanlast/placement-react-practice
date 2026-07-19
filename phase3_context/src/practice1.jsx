import { useContext } from "react";
import {UserContext} from "./context/UserContext.jsx";
function Practice1(){
	const name = useContext(UserContext);
	return<>
	    
		<h1>practice 1</h1>
		<p>Hello! {name}</p>
	</>
};

export default Practice1;