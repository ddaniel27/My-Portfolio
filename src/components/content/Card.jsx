import React, {useState} from "react";

function Card(props){
    const [img, setImg] = useState(props.imgUrl);
    function handleGif(){
        setImg(props.gifUrl);
    }
    function handleImg(){
        setImg(props.imgUrl)
    }
    function handleAlert(){
        if(props.webUrl === "#") alert("Sorry, I'm working on deploy this web. Please visit other projects or see the GitHub repo!");
    }
    return (
        <div className="project border-box">
        <h2 className="border-box">{props.title}</h2>
            <img onMouseOver={handleGif} onMouseOut={handleImg} src={img} alt={props.imgAlt}></img>
            <details>
                <summary>Read More</summary>
                <p>{props.description}</p>
            </details>
            <div className="links">
                <a href={props.gitUrl}><i class="fab fa-github"></i></a>
                <a onClick={handleAlert} href={props.webUrl}><i class="fas fa-pager"></i></a>
            </div>
        </div>
    );
}

export default Card;