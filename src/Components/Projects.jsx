import React from "react";
import projectsData from "../Projects";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
const Projects = () => {
  console.log(projectsData);
  console.log(projectsData.title);
  return (
    <section id="Projects">
      <div className="projects-container flex flex-row min-h-screen justify-evenly items-center">
        <div className="project-content flex flex-col justify-center items-center w-3/4 gap-6 my-7">
          <div className="projects-heading logo">
            <h2 className="text-3xl font-semibold">Projects</h2>
          </div>
          <div className="projects-content flex flex-row justify-between items-center flex-wrap gap-6">
            {projectsData.map((data, index) => {
              return (
                <div className="project-card p-2">
                  <img
                    className="project-image rounded-xl"
                    src={data.image}
                    alt={data.image}
                  />
                  <div className="project-content flex flex-col justify-cnter items-center text-center">
                    <h3 className="project-title text-xl font-semibold  my-3">
                      {data.title}
                    </h3>
                    <p className="project-description">{data.description}</p>
                    <div className="deployment flex flex-row justify-between items-center gap-6">
                      <a href={data.deployment} target="blank">
                        <p className="project-description">
                          {" "}
                          <GrDeploy />{" "}
                        </p>
                      </a>
                      <a href={data.deployment} target="blank">
                        <p className="project-description">
                          {" "}
                          <FaGithub />{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
