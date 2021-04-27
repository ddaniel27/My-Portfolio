import React from "react";

function Contact(){
    return (
    <div className="contact-content">
        <div className="buttons">
           <a href="/"> <i class="fab fa-github"></i> </a>
           <a href="/"> <i class="fab fa-linkedin-in"></i> </a>
        </div>
        <form>
            <input name="email" type="text" placeholder="Your Email"/>
            <textarea type="text" placeholder="Write a nice message :)"/>
            <button type="submit">Send!</button>
        </form>
    </div>
    );
}

export default Contact;