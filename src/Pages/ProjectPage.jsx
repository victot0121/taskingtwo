import React from 'react';
import Navbar from "../Components/Navbar";
import Ade from "../assets/ade.png";
import "./ProjectPage.css";


const ProjectPage = () => {

  return (
    <div>
      <Navbar />

    <div><img src={Ade} alt='Oladoye Jelili Ademola'  className="bg"/>

    <div className="project">
        <div className="project-title">
          <h1 className="h2">Project</h1>
      </div>      

      <div className="task">
        <h2 className="h2">Personal Website Portfolio</h2>
        <p className="p-task">
          A single-page application built using React, HTML and CSS showcasing my front-end development, UI design, data analytics, and prompt engineering skills. Includes sections for About Me, Skills, Projects, Resume, and Contact.
          I’m currently working on several real-world projects that reflect my skills in 
          Frontend Web Development,Data Analysis, Graphic Design, and Prompt Engineering.
          These projects are still in progress and will be added here soon — complete with source code, live demos, and detailed case studies. 
          My goal is to showcase solutions that are not only functional but also creatively and technically sound.
          Stay tuned — updates coming very soon!
        </p>
      </div>
    </div>
    </div>
    </div>
  );
}
export default  ProjectPage;


  