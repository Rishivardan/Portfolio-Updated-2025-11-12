import React from "react";
import Aboutpic from './About.jpg';
import { FaCode, FaPaintBrush, FaRocket } from 'react-icons/fa';


function About(){
    return(
        <section id="about" data-aos="fade-up">
            <h2>About Me</h2>
            <div className="about-content">
                <img src={Aboutpic} alt="about" className="about-img"></img>
                
                <div className="me">
                <p>
                    I'm <strong>Rishivardan</strong>, a passionate Software Engineering student graduating degree in University Of WestMinster 
                    I loves to turning ideas into working code. 
                    I enjoy creaating interactive, user-friendly web applications using technologies like React,Node.js, and JAVA.
                </p>

                <p>
                    I'm constantly exploring new technologies and improving my skills to be 
                    full stack developer. My future goal is to become AI/ML Engineer. I believe in writing clean code,efficient and scalable
                    makes an impact.
                </p>
                </div>
                
            <div className="feature">
                <div className="feature-item">
                    <FaCode size={40} color="#4CAF50" />
                    <div className="feature-text">
                        <h3>Clean Code</h3>
                        <p>Writing maintainable and scalable code following best practices</p>
                    </div>
                </div>

                <div className="feature-item">
                    <FaPaintBrush size={40} color="#FF5722" />
                    <div className="feature-text">
                        <h3>Creative Design</h3>
                        <p>Creating beautiful and intuitive user interfaces</p>
                    </div>    
                </div>

                <div className="feature-item">
                    <FaRocket size={40} color="#2196F3" />
                    <div className="feature-text">
                        <h3>Performance</h3>
                        <p>Optimizing applications for speed and efficiency</p>
                    </div>
                </div>
            </div>    
        </div>   
        </section>
    );
}

export default About;