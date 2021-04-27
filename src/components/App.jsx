import React, {useState} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App(){
    const [contentSelected, setContentSelected] = useState("home");
    function selectContent(element){
        setContentSelected(element.innerText);
    }
    function showChange(element){
        [...document.getElementsByClassName("nav-item")].forEach(option=>option.setAttribute("style","color:var(--third);text-decoration-line: none;"));
        element.tagName === "P"
        ?element.setAttribute("style","color:var(--fourth);text-decoration: wavy underline;")
        :[...document.getElementsByClassName("nav-item")][2].setAttribute("style","color:var(--fourth);text-decoration: wavy underline;");
    }
    return(
        <div>
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