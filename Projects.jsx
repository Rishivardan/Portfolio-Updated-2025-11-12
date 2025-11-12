import React from "react";


function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built using React and CSS animations.",
      image: "https://via.placeholder.com/300x200",
      link: "https://github.com/yourgithub/portfolio",
    },
    {
      title: "Task Manager App",
      description: "A simple task management tool built with React and local storage.",
      image: "https://via.placeholder.com/300x200",
      link: "https://github.com/yourgithub/task-manager",
    },
    {
      title: "Weather Dashboard",
      description: "Weather forecast web app using OpenWeather API.",
      image: "https://via.placeholder.com/300x200",
      link: "https://github.com/yourgithub/weather-dashboard",
    },
  ];

  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <h2>My Projects</h2>
      <div className="project-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-btn">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
