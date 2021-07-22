import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Project.css';

function Project({ project }) {
  const [technoList, setTechnoList] = useState([]);
  const url = `${process.env.REACT_APP_API_URL}/technos/${project.id}`;
  useEffect(() => {
    axios.get(url)
      .then((response) => setTechnoList(response.data));
  }, []);
  return (
    <>
      <div className="project-content">
        <div className="text-container">
          <h2>{project.project_name}</h2>
          <h2>{project.date}</h2>
          <h2>{project.client_name}</h2>
          {technoList && technoList.map((techno) => (<h3>{techno.techno_name}</h3>))}
          <p>{project.description}</p>
          <a href={project.link}>Lien github</a>
        </div>
        <div className="picture-container">
          <img className="picture" src={`${process.env.REACT_APP_API_URL}/uploads/${project.picture1}`} alt={project.picture1} />
          {project.picture2 && (
          <img className="picture" src={`${process.env.REACT_APP_API_URL}/uploads/${project.picture2}`} alt={project.picture2} />
          )}
        </div>
      </div>
    </>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    project_name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
    picture1: PropTypes.string.isRequired,
    picture2: PropTypes.string,
    link: PropTypes.string.isRequired,
    client_name: PropTypes.string.isRequired,
  }),
};

Project.defaultProps = {
  project: undefined,
};

export default Project;
