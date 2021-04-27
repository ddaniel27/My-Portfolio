import React from "react";

function Card(props){
    return (
        <div className="project border-box">
        <h2 className="border-box">{props.title}</h2>
            <img src={props.imgUrl} alt={props.imgAlt}></img>
            <details>
                <summary>Read More</summary>
                <p>{props.description}</p>
            </details>
            <div className="links">
                <a href={props.gitUrl}><i class="fab fa-github"></i></a>
                <a href={props.webUrl}><i class="fas fa-pager"></i></a>
            </div>
        </div>
    );
}

export default Card;