import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>the best <span className='purple'> cherished. </span></h1>
          <p className='lead'>
          are memories of your travels some of your <span className='purple'> best</span> memories? 
          <br></br>
          <small> do you not only want to travel but also want to<span className='purple'> cherish </span> those precious travel memories? </small>
          <br></br>
          <br></br>
          create a profile to cherish all of your best adventures & to view the most cherished adventures of other travel lovers.
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              sign up
            </Link>
            <Link to='/login' className='btn btn-light'>
              login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);