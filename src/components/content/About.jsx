import React from "react";

//src my pic https://i.imgur.com/K58iAZ4.jpg

function About(props){
    return (
        <div className="about-content dis-flex">
            <aside>
                <img className="border-box" src="https://i.imgur.com/K58iAZ4.jpg" alt="my-profile"></img>
                <p>Daniel Dorado</p>
                <p>21 years</p>
                <p>Electronics and telecommunications engineer</p>
            </aside>
            <section className="border-box">
                <h2>Hi there!</h2>
                <p>
                 I'm a Full-stack developer oriented to Back-end development currently doing my last year at univesity.
                 Experienced with the MERN stack (MongoDb, Express, React JS, Node.JS), at the moment I am developing personal projects to get more experience.<br/>
                 <br/>
                 I am always learning, practicing and researching new things. I believe you should never go to bed without learning something new. The two things I love most besides coding are my dog and hang out with my friends.<br/>
                 <br/>
                 If you want to work with me, go ahead and <span onClick={(event)=>{props.showChange(event.target);props.headerSelect(event.target)}} className="push-up">contact me</span>, I'll be really excited to work with you. You can also find me on <a href="https://www.linkedin.com/in/daniel-dorado-a83157200/" className="push-up">LinkedIn</a> or check other projects on my <a href="https://github.com/ddaniel27" className="push-up">GitHub</a> page.
                </p>
                <h2>Skills</h2>
                <div className="skills dis-flex"><i class="fab fa-js-square"></i> <i class="fab fa-react"></i> <i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-bootstrap"></i> <i class="fab fa-node-js"></i> <i class="fas fa-database"></i> </div>
            </section>
        </div>
        );
}

export default About;