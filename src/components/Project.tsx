import React from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section className=" px-3">
      <Title
        head="Featured Projects"
        body="Here are some of the selected projects that showcase my passion for front-end development."
      />
      <div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Project;
