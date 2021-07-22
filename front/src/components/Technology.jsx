import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import axios from 'axios';

function Technology({ techno }) {
  const [technoProjectList, setTechnoProjectList] = useState([]);
  const url = `${process.env.REACT_APP_API_URL}/technos/${techno.id}`;
  useEffect(() => {
    axios.get(url)
      .then((response) => setTechnoProjectList(response.data));
  }, []);
  return (
    <div className="techno-content">
      <h2>{techno.name}</h2>
      {technoProjectList && technoProjectList.map(
        (technoProject) => (
          <>
            <HashLink to={`/projects#${technoProject.project_name}`}>{technoProject.project_name}</HashLink>
            <br />
          </>
        ),
      )}
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
