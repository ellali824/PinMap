import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, location, reason, activities, setText] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Add a pin</h3>
      </div>
      <small>* = required field</small>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Location"
            name="location"
            value={location}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Reason why you went?"
            name="reason"
            value={reason}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Some activities that you did"
            name="activities"
            value={activitiesn}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
