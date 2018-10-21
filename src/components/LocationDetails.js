import React, { Component } from 'react';

const LocationDetails = (props) =>{
  return (
    <div className="col s7" id="card-container">
        <div className="card frosted-glass">
          <a><i className="material-icons white-text" id="close-icon">close</i></a>
            <div className="right-align">

            </div>
            <div className="frosted-glass-content-container">
              <div className="frosted-glass-content white-text">
                {props.locationDescription}
              </div>
            </div>
            <div className="card-content grey-text text-darken-3"></div>
        </div>
    </div>
  );
}

export default LocationDetails;
