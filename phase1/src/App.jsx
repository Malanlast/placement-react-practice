import './App.css';
import Alia from './pages/alia.jsx';

function App() { 
  function sayHello(name){
    alert("Hi "+name);
  };
  return (
    <>
      <h1>Phase 1</h1>
      <hr/>
      <Alia work="bollywood" greet={sayHello} age={33} nums={[10,20,30,40,50]} user={{
        name:"Alia",
        age:33,
        profession:"actress",
      }}
      > <p>Inside Alia component</p></Alia>
    </>
  )
};

export default App;
