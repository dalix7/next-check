"use client";

import React from "react";
import Project from "./Project";
import projects from "./data";
import "/app/projects/style.css";

const ProjectList = () => {
  return (
    <div className="lists" style={{ width: "80%" }}>
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
};

export default ProjectList;
