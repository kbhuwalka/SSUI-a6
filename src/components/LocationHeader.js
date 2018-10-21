import React, { Component } from 'react';

const LocationHeader = (props) =>{
  return (
    <div className="col s3 offset-s1" id="header-container">
        <div className="left-align white-text"><h3>{props.locationName}</h3></div>
        <div className="left">
          <a id="read-more" className="white-text header-link">
            Read More
            <i className="material-icons white-text">add_circle</i>
          </a>
        </div>
    </div>
  );
}

export default LocationHeader;
