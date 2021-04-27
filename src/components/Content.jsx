import React from "react";
import About from "./content/About";
import Contact from "./content/Contact";
import Home from "./content/Home";
import Project from "./content/Project";
import projects from "../projects";

function Content(props){
    switch(props.contentSelected){
        case "home":
            return <Home/>;
        case "projects":
            return(
                <div className="project-content">
                    {projects.map(project => <Project title={project.title} description={project.description} imgUrl={project.imgUrl} imgAlt={project.imgAlt}
                    gitUrl={project.gitUrl} webUrl={project.webUrl} />)}
                </div>
                );
        case "contact me":
            return <Contact/>;
        
        case "about me":
            return <About showChange={props.showChange} headerSelect={props.headerSelect}/>;
        default:
            return <About showChange={props.showChange} headerSelect={props.headerSelect}/>;
    }
}

export default Content;