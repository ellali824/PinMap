import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    basedin,
    recent,
    live,
    fave,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src={avatar} alt='' />
      <h1 className='large'><i>{name}</i></h1>
      <p className='lead'>
        based in {basedin}
      </p>
      <p>
         most recent travel: {recent}
        </p>
       
        <p>
        if I could live anywhere, I would live in: {live}
        </p>
        <p>
        if I HAD to pick a favorite trip, it would be: {fave}
        </p>
      
      <div className='icons my-1'>
       
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x' />
          </a>
        )}
        {social && social.vsco && (
          <a href={social.vsco} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-camera-retro fa-2x' />
          </a>
        )}
        {social && social.web && (
          <a href={social.web} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-globe fa-2x' />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x' />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x' />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
