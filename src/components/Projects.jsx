import React from 'react';
import '../style/Projects.css';

function Projects() {
  return (
    <>
      <div className="projects-card">
      <h2 className="ProjectsH2">Projects</h2><br/>
      <div className="projects">
        <div className="card">
          <img src="https://raw.githubusercontent.com/the-asherbrook-06/portfolio/84d8394273d84cef8dac1719ba95a56d1555fc78/public/Tasker.svg" alt="The Tasker" className="card-image" />
          <div className="space-image"></div>
          <h2 className="project-title">The Tasker</h2>
          <div className="space"></div>
          <p className="content">The Tasker is an effective Task Management tool.</p>
        </div>
        <div className="card">
          <img src="https://raw.githubusercontent.com/the-asherbrook-06/portfolio/84d8394273d84cef8dac1719ba95a56d1555fc78/public/Budget_Tracker.svg" alt="Budget Tracker" className="card-image" />
          <div className="space-image"></div>
          <h2 className="project-title">Budget Tracker</h2>
          <div className="space"></div>
          <p className="content">A simple and effective budget tracking application.</p>
        </div>
        <div className="card">
          <img src="https://raw.githubusercontent.com/the-asherbrook-06/portfolio/84d8394273d84cef8dac1719ba95a56d1555fc78/public/Weather_tracker.svg" alt="Weather Watcher" className="card-image" />
          <div className="space-image"></div>
          <h2 className="project-title">Weather Watcher</h2>
          <div className="space"></div>
          <p className="content">Track the weather of your favorite locations in real-time.</p>
        </div>
        <div className="card">
          <img src="https://raw.githubusercontent.com/the-asherbrook-06/portfolio/84d8394273d84cef8dac1719ba95a56d1555fc78/public/Fitness_tracker.svg" alt="Fitness Tracker" className="card-image" />
          <div className="space-image"></div>
          <h2 className="project-title">Fitness Tracker</h2>
          <div className="space"></div>
          <p className="content">A tool to monitor your fitness activities and goals.</p>
        </div>
        <div className="card">
          <img src="https://raw.githubusercontent.com/the-asherbrook-06/portfolio/84d8394273d84cef8dac1719ba95a56d1555fc78/public/Anime_recommender.svg" alt="Anime Recommender" className="card-image" />
          <div className="space-image"></div>
          <h2 className="project-title">Anime Recommender</h2>
          <div className="space"></div>
          <p className="content">A recommender to discover your next Anime.</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Projects;
