import React from "react";

function Contact(){
    return (
    <div className="contact-content dis-flex">
        <div className="buttons">
           <a href="/"> <i className="fab fa-github border-box"></i> </a>
           <a href="/"> <i className="fab fa-linkedin-in border-box"></i> </a>
        </div>
        <form className="dis-flex">
            <input className="border-box" name="email" type="text" placeholder="Your Email"/>
            <textarea className="border-box" type="text" placeholder="Write a nice message :)"/>
            <button className="border-box" type="submit">Send!</button>
        </form>
    </div>
    );
}

export default Contact;