import React, {useState} from "react";

function Header(props) {
    const [mobileState, setMobileState] = useState(false);
   function mobileMenu(){
       setMobileState(!mobileState);
    if (mobileState){
        [...document.getElementsByClassName("desktop")][0].style.display="block";
        [...document.getElementsByClassName("mobile-menu-x")][0].style.display="block";
        [...document.getElementsByClassName("mobile-menu")][0].style.display="none";
    }else{
        [...document.getElementsByClassName("desktop")][0].style.display="none";
        [...document.getElementsByClassName("mobile-menu-x")][0].style.display="none";
        [...document.getElementsByClassName("mobile-menu")][0].style.display="block";
    }
   }
    return(
        <div className="header">
            <svg width="200" height="150" viewBox="100 0 460 460" xmlns="http://www.w3.org/2000/svg">
                <title>Logo-Test</title>
                <g>
                <title>Layer 1</title>
                <circle id="svg_3" r="208.700745" cy="232" cx="327" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#493323"/>
                <polygon strokeWidth="0" strokecolor="#000000" fill="#493323" edge="0" orient="x" sides="5" shape="regularPoly" id="svg_5" cy="125" cx="-32"/>
                <polygon strokeWidth="0" strokecolor="none" fill="#493323" edge="0" orient="x" sides="5" shape="regularPoly" id="svg_6" cy="118" cx="33"/>
                <polygon stroke-width="0" points="287.59298818719463,123 258.1619571910545,163.50833896391396 210.54154871534814,148.03553030750055 210.54154871534814,97.96446969249948 258.1619571910545,82.49166103608603 287.59298818719463,122.99999999999999 " strokeWidth="0" strokecolor="none" fill="#493323" edge="50.071061" orient="x" sides="5" shape="regularPoly" id="svg_7" cy="123" cx="245"/>
                <path stroke="#000000" id="svg_10" d="m216.44706,202c0,-56.1066 -52.55366,-94.55294 3.55294,-94.55294c56.1066,0 101.55294,45.44634 101.55294,101.55294c0,56.1066 -45.44634,101.55294 -101.55294,101.55294c-56.1066,0 -3.55294,-52.44634 -3.55294,-108.55294z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#ffdf91"/>
                <path id="svg_11" stroke="#000000" d="m368.616555,203.499992c0,-56.1066 -52.55366,-94.55294 3.55294,-94.55294c56.1066,0 101.55294,45.44634 101.55294,101.55294c0,56.1066 -45.44634,101.55294 -101.55294,101.55294c-56.1066,0 -3.55294,-52.44634 -3.55294,-108.55294z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#ffdf91"/>
                <path id="svg_14" d="m393.02382,51c0,-23.19126 23.78492,33.02382 46.97618,33.02382c23.19126,0 42.97618,22.78492 42.97618,45.97618c0,23.19126 -23.78492,-28.02382 -46.97618,-28.02382c-23.19126,0 -42.97618,-27.78492 -42.97618,-50.97618z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#ffdf91"/>
                <circle id="svg_15" r="13" cy="156" cx="487" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#ffdf91"/>
                </g>
            </svg>
            <p onClick={mobileMenu} className="mobile-menu"><i class="fas fa-bars"></i></p>
            <p onClick={mobileMenu} className="mobile-menu-x"><i class="fas fa-times"></i></p>
            <nav className="desktop">
                <p onClick={(event)=>{props.showChange(event.target);props.headerSelect(event.target);}} className="nav-item">home</p>
                <p onClick={(event)=>{props.showChange(event.target);props.headerSelect(event.target);}} className="nav-item">projects</p>
                <p onClick={(event)=>{props.showChange(event.target);props.headerSelect(event.target);}} className="nav-item">contact me</p>
                <p onClick={(event)=>{props.showChange(event.target);props.headerSelect(event.target);}} className="nav-item">about me</p>
            </nav>
        </div>
        )
}

export default Header;