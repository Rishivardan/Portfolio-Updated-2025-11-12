import React from "react";
import {FaInstagram, FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <h3>Rishivardan</h3>
                <p>Building digital experiences with passsion and precision</p>
            </div>
            <div className="footer-details">
                <a href="mailto:rishivardan2004@gmail.com" target="_blank" rel="noreferrer">
                    <FaEnvelope className="social-items" size={25}/>
                </a>
                <a href="https://www.instagram.com/vk_rishi29?igsh=MXIyamt5ZzJla25mdQ==" target="_blank" rel="noreferrer">
                    <FaInstagram className="social-items" size={25}/>
                </a> 
                <a href="https://www.linkedin.com/in/rishivardan-vallikanthan-42b464350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                    <FaLinkedin className="social-items" size={25}/>
                </a> 
                <a href="https://github.com/Rishivardan" target="_blank" rel="noreferrer">
                    <FaGithub className="social-items" size={25}/>
                </a>   
            </div>
            <p className="footer-copy">
                © Rishivardan. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;