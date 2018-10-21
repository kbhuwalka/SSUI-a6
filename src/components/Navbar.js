import React, { Component } from 'react';

const Navbar = (props) =>{
  return (
    <nav className="navbar-fixed">
        <div className="nav-wrapper">
          <ul className="right" id="nav-mobile">
            {
              props.locations.map(location =>
                <li onClick={() => props.changeLocation(location)}>
                  <a>{location}</a>
                </li>
              )
            }
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
