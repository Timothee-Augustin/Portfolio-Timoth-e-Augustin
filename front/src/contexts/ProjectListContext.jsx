import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ProjectListContext = createContext();

function ProjectListProvider({ children }) {
  const [projectList, setProjectList] = useState([]);
  const url = `${process.env.REACT_APP_API_URL}/projects`;
  React.useEffect(() => {
    axios.get(url)
      .then((response) => (setProjectList(response.data)));
  }, []);

  return (
    <ProjectListContext.Provider value={{ projectList }}>
      {children}
    </ProjectListContext.Provider>
  );
}

ProjectListProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useProjectList = () => useContext(ProjectListContext);

export { ProjectListProvider, useProjectList };
