{/* 
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
//MAP 
const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div>
    <h3 className="text-dark">{company}</h3>
    <p>
      <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong>Position: </strong> {title}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
*/}
import React from "react";

import Map from "../maps/RecycleCentersMap";

const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default class RecycleCenterssMapContainer extends React.Component {
  render() {
     return (
        <div className="map-container">
        <Map
           recycleCenters={this.props.recycleCenters}
           googleMapURL={`https://maps.googleapis.com/maps/api/js?   key=${KEY}&v=3.exp&libraries=geometry,drawing,places`}
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `600px`, width: `100%` }} />}
           mapElement={<div style={{ height: `100%` }} />}
        />
       </div>
     );
  }
}