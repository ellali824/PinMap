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
      <h1 className='large'>{name}</h1>
      <p className='lead'>
        Based in: {basedin}
        {/* {status} {company && <span> at {company}</span>} */}
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
        {/*      <p>{location && <span>{location}</span>}</p>
 */}

      <div className='icons my-1'>
        {/*}
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </a>
        )}
        */}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x' />
          </a>
        )}
        {social && social.vsco && (
          <a href={social.vsco} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x' />
          </a>
        )}
        {social && social.web && (
          <a href={social.web} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-globe fa-2x' />
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
