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
        <h2 id="profiles-name">{name}</h2>
        <p>
          Based in <span className='dark-purple'> {basedin}</span>
        </p>
        <p>
          Most recent travel: <span className='dark-purple'> {recent} </span>
        </p>
       
        <p>
        If I could live anywhere, I would live in: <span className='dark-purple'> {live} </span>
        </p>
        <p>
        If I HAD to pick a favorite trip, it would be: <span className='dark-purple'> {fave} </span>
        </p>
        <br></br>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          view profile
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
