import PropTypes from 'prop-types';
import React from 'react';

const Video = ({ id }) => (
  <video
    autoPlay
    muted
    loop
    style={{
      height: '101vh' // HACK
    }}
  >
    <source src={id} type="video/mp4" />
  </video>
);

Video.propTypes = {
  id: PropTypes.string.isRequired
};

export default Video;
