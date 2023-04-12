import React from "react";
import PROJECTS from "../data/projects";

class Project extends React.Component {
  render() {
    const { image, title, link, description } = this.props.project;

    return (
      <div
        className="card shadow-lg border border-0 m-2"
        style={{ width: "18rem" }}
      >
        <img
          src={image}
          alt="Project image holder."
          className="object-fit-cover"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} target="_blank" className="btn btn-dark">
            {title}
          </a>
        </div>
      </div>
    );
  }
}

export default class Projects extends React.Component {
  render() {
    return (
      <section>
        <h2 className="text-center mt-5 mb-5">Highlighted Projects</h2>
        <div className="d-flex flex-column flex-lg-row justify-content-evenly align-items-center ">
          {PROJECTS.map(project => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </section>
    );
  }
}
