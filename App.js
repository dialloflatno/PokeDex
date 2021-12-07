import React  from "react"; 
import Display from './Display';
import  Navigator  from './Navigator';
import './App.css';



function App() {
  return (
    <div className="App">

     <div className = "contianer">
       <div classname = "global">
        <Navigator />
        </div>
        <div className = "Poke_field"/>
        <Display />
     </div>
       
    
    </div>
  );
}

export default App;
