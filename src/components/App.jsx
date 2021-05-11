import React, {useState} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import '../style.css';

function App(){
    const [contentSelected, setContentSelected] = useState("home");
    function selectContent(element){
        element.innerText
        ? setContentSelected(element.innerText)
        : setContentSelected("home");
    }
    function showChange(element){
        [...document.getElementsByClassName("nav-item")].forEach(option=>option.setAttribute("style","color:var(--third);text-decoration-line: none;"));
        if(element.tagName === "P") element.setAttribute("style","color:var(--fourth);text-decoration: wavy underline;");
        else if(element.tagName === "SPAN") [...document.getElementsByClassName("nav-item")][2].setAttribute("style","color:var(--fourth);text-decoration: wavy underline;");
        else [...document.getElementsByClassName("nav-item")][0].setAttribute("style","color:var(--fourth);text-decoration: wavy underline;");
    }
    return(
        <div className="second-root animated">
            <Header
            showChange={showChange}
            headerSelect={selectContent}/>

            <Content
            showChange={showChange}
            headerSelect={selectContent}
            contentSelected={contentSelected}/>

            <Footer/>
        </div>
    );
}

export default App;