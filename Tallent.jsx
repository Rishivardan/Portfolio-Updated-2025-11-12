import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGithub, FaJava } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

function Tallent(){
    return(
        <div className="skills" id="skills" data-aos="fade-up">
            <h3>Skills</h3>
            <div className="skills-icons">
                <div className="skill-item"><FaReact size={60} color="#61DBFB" /><p>React.js</p></div>
                <div className="skill-item"><FaNodeJs size={60} color="#68A063" /><p>Node.js</p></div>
                <div className="skill-item"><FaJava size={60} color="#f89820" /><p>Java</p></div>
                <div className="skill-item"><FaHtml5 size={60} color="#e34c26" /><p>HTML</p></div>
                <div className="skill-item"><FaCss3Alt size={60} color="#264de4" /><p>CSS</p></div>
                <div className="skill-item"><SiJavascript size={60} color="#f7df1e" /><p>JavaScript</p></div>
                <div className="skill-item"><FaPython size={60} color="#306998" /><p>Python</p></div>
                <div className="skill-item"><FaGithub size={60} color="#333" /><p>Git & GitHub</p></div>
            </div>
        </div>
    );
}

export default Tallent;
