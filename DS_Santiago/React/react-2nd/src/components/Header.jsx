// Header.js
import Picture from "./Picture";
import React from 'react';
import classes from '../public/Header.module.css';

const Header = (props) => {
  const { name, surname, greeting } = props;

  return (
    <div className={classes.Header}>
      {greeting()}
      <p>My name is {name} {surname}</p>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}><a href="/">Home</a></li>
          <li className={classes.li}><a href="/directory">Directory</a></li>
          <li className={classes.li}><a href="/agenda">Agenda</a></li>
          <li className={classes.li}><a href="/phone">Phone</a></li>
          <li className={classes.li}><a href="/" onClick={props.login}>Login</a></li>
          {/* Render the Login component when the Login link is clicked */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;