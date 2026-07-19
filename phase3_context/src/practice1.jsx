import { useContext } from "react";
import {UserContext} from "./context/UserContext.jsx";
function Practice1(){
	const name = useContext(UserContext);
	return<>
	    
		<h1>practice 1</h1>
		<p>Hello! {name}</p>

		<p>Easy Trick to Remember<br/>
		Props → Parent sends data to one child.<br/>
		useContext → One Provider shares data with many components.
		</p>
	</>
};

export default Practice1;