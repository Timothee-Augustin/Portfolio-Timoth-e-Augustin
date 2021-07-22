import React from 'react';
import PropTypes from 'prop-types';

function Project({ project }) {
  return (
    <div className="projectCard">
      <h2>{project.name}</h2>
      <h2>{project.date}</h2>
      <p>{project.description}</p>
      <a href={project.link}>{project.link}</a>
      <img className="picture1" src={`${process.env.REACT_APP_API_URL}/uploads/${project.picture1}`} alt={project.picture1} />

    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
    picture1: PropTypes.string.isRequired,
    picture2: PropTypes.string,
    link: PropTypes.string.isRequired,
  }),
};

Project.defaultProps = {
  project: undefined,
};

export default Project;
