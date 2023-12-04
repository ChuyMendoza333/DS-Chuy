import React, { useState } from 'react';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [today] = useState(new Date());
  const [name] = useState("Santiago");
  const [surname] = useState("Diaz");

  const greeting = () => {
    const currentHour = today.getHours();
    const greetingStyles = {
      color: currentHour < 12 ? "blue" : currentHour < 18 ? "green" : "red",
      fontSize: "20px",
      border: "1px solid black",
      background: currentHour < 12 ? "skyblue" : currentHour < 18 ? "#975408" : "green",
    };

    const greetingMessage =
      currentHour < 12 ? "Good morning" : currentHour < 13 ? "Good afternoon" : "Good night";

    return <h1 style={greetingStyles}>{greetingMessage}</h1>;
  };

  console.log("Render Called!!!");

  return (
    <div className="App">
      <Header 
        today={today} 
        name={name} 
        surname={surname} 
        greeting={greeting} />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default App;
