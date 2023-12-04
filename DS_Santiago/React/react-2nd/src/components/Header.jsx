import React from "react"
import Picture from "./Picture";
import { Link } from "react-router-dom";

function Header(props){
    var name="Santiago";
  var surname="Perez";
  var today= new Date();

  let greeting;

 

  const customStyle={
    color: "navy",
    fontSize: "20px",
    border: "1px solid black",
  };

  today.setHours(20);

  var currentTime= today.getHours();
  if(currentTime<12){
    greeting="Good morning";
    customStyle.background="yellow";
  } else if(currentTime<18){
    greeting="Good afternoon";
    customStyle.background="orange";
  } else{
    greeting="Good night";
    customStyle.background="white";
  }

    function logOut(){
      props.listener();
    }
    return(
        <div className='container'>
            <h1 style={customStyle}>{greeting}</h1>
            <p>My name is {name + " " + surname}</p>
            <Picture />
            <nav className="navbar navbar-expand-lg bg-light" >
              <u1 className="navbar-nav mr-auto">
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to ='/directory'>Directory</Link></li>
                <li className="nav-item"><Link to ='/agenda'>Agenda</Link></li>
                <li className="nav-link"><Link to ='/phone'>Phone</Link></li>
                <li><Link to ='/' onClick={logOut} className='btn btn-ouline-succes my-2 my-sm-0'>Logout</Link> </li>
              </u1>
            </nav>
        </div>
    )
}

export default Header;