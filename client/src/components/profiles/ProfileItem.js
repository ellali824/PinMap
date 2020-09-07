import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//changed a lot 
const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    basedin,
    recent,
    live,
    fave
  }
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      
      <div>
        <h2>{name}</h2>
        <p>
          Based in: {basedin}
        </p>
        <p>
          Most recent travel: {recent}
        </p>
       
        <p>
        If I could live anywhere, I would live in: {live}
        </p>
        <p>
        If I had to pick a favorite trip, it would be: {fave}
        </p>
        <br></br>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
        {/*   <p className='my-1'>{location && <span>{location}</span>}</p> */}
      </div>
      {/*  <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>*/}
     
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
