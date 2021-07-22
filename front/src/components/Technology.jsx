import React from 'react';
import PropTypes from 'prop-types';

function Technology({ techno }) {
  return (
    <div className="techno-content">
      <h2>{techno.name}</h2>
    </div>
  );
}

Technology.propTypes = {
  techno: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

Technology.defaultProps = {
  techno: undefined,
};

export default Technology;
