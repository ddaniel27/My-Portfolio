import React from "react";
import Card from "./Card";
import projects from "../../projects";

function Project(){
    return (
        <div className="project-content dis-flex">
            {projects.map(project => <Card title={project.title} description={project.description} gifUrl={project.gifUrl} imgUrl={project.imgUrl} imgAlt={project.imgAlt}
            gitUrl={project.gitUrl} webUrl={project.webUrl} />)}
        </div>
    );
}

export default Project;