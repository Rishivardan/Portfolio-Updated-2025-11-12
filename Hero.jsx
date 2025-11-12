import React from "react";
import profilePic from './Profile.jpg';

function Hero(){
    return(
        <section id="home" className="hero" data-aos="fade-up">
            <div className="hero-content">
                <h1>Hi, I'm <span>Rishivardan</span></h1>
                <h2>Software Engineer | Web Developer</h2>
                <p>I love building web apps that make life easier and smarter</p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn">View Projects</a>
                    <a href="#contact" className="btn-outline">Hire Me</a>
                </div>
            </div>

            <div className="hero-image">
                <img src={profilePic} alt="Rishi-profile"></img>
            </div>
        </section>
    )
}

export default Hero;