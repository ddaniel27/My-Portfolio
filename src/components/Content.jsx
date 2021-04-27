import React from "react";
import About from "./content/About";
import Contact from "./content/Contact";
import Home from "./content/Home";
import Project from "./content/Project";

function Content(props){
    switch(props.contentSelected){
        case "home":
            return <div><Home/></div>;
        case "projects":
            return <div><Project/></div>;
        case "contact me":
            return <div><Contact/></div>;
        case "about me":
            return <div><About showChange={props.showChange} headerSelect={props.headerSelect}/></div>;
        default:
            return <div><Home/></div>;
    }
}

export default Content;