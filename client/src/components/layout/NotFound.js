import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> page not found
      </h1>
      <p className='large'>sorry, this page does not exist</p>
    </Fragment>
  );
};

export default NotFound;
