import React, { Component } from 'react';

const LocationHeader = (props) =>{
  return (
    <div className="col s3 offset-s1" id="header-container">
        <div className="right-align white-text"><h3>{props.locationName}</h3></div>
        <div>
          <span>
            <a id="read-more" className="white-text header-link">
              Read More
              <i className="material-icons white-text">add_circle</i>
            </a>
          </span>
        </div>
    </div>
  );
}

export default LocationHeader;
