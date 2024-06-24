"use client";

import Projects from "/app/Components/ProjectList/data";
import "/app/projects/style.css";

const ProjectPage = ({ params }) => {
  const { id } = params;

  const project = Projects.find((p) => p.id === id);

  if (!project) {
    return <p>project not found</p>;
  }

  return (
    <div className="projectDesc">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
