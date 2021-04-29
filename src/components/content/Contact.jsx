import React from "react";
import social from "../../social";

function Contact(){
    return (
    <div className="contact-content dis-flex">
        <div className="buttons">
           <a href={social.github}> <i className="fab fa-github border-box"></i> </a>
           <a href={social.linkedin}> <i className="fab fa-linkedin-in border-box"></i> </a>
        </div>
        <form action="mailto:danieldorado27@gmail.com" className="dis-flex">
            <input className="border-box" name="subject" type="text" placeholder="Subject"/>
            <textarea className="border-box" name="body" placeholder="Write a nice message :)"/>
            <button className="border-box" type="submit" value="Send">Send!</button>
        </form>
    </div>
    );
}

export default Contact;