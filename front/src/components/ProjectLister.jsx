import React from 'react';
import Project from './Project';
import { useProjectList } from '../contexts/ProjectListContext';

function ProjectLister() {
  const { projectList } = useProjectList();
  return (
    <>
      {projectList && projectList.map(
        (project) => (
          <Project key={project.id} project={project} />
        ),
      )}
    </>
  );
}

export default ProjectLister;
