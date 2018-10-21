import React, { Component } from 'react';
import LocationHeader from './LocationHeader';
import LocationDetails from './LocationDetails';

const MainContent = (props) =>{
  return (
    <div className="row main-content">
      <LocationHeader
        locationName={props.locationName}
        ></LocationHeader>
        <LocationDetails
          locationDescription={props.locationDescription}
          ></LocationDetails>
    </div>
  );
}

export default MainContent;
