 import Practice1 from "./practice1.jsx";
 import {UserContext} from "./context/UserContext.jsx";
 import Practice2 from "./practice2.jsx";
 function App() {
   return (
    <UserContext.Provider value="Shio">
     <Practice1/>
     <Practice2/>
    </UserContext.Provider>
  );
}

export default App;


