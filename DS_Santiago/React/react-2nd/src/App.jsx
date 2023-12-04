import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Agenda from "./components/Agenda";
import Login from "./components/Login";
import Directory from "./components/Directory";
import PhoneBook from "./components/PhoneBook";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  var today = new Date();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function changeLoggedState(){
      setIsLoggedIn(!isLoggedIn);
  }

  function CheckLogStatus() {
    return isLoggedIn ?  (<Directory listener={changeLoggedState}  /> ):
    (<Login listener={changeLoggedState} /> );

  }


  return (
    <div className="App">
      <CheckLogStatus component={Header}/>
      <Routes>
        <Route path='/' elements={isLoggedIn ? ( <Navigate to='/directory' />) : (
          <Login listener={changeLoggedState} />
        )} />
        <Route path='/directory' elements={<CheckLogStatus component={Directory} />} />
        <Route path='/phone' elements={<CheckLogStatus component={PhoneBook} />} />
        <Route path='/Agenda' elements={<CheckLogStatus component={Agenda} />} />

      </Routes>
      {
     
}
<p>Copyright {today.getFullYear()}</p>
    </div>
  );
}

export default App;