import React from 'react';
import Navbar from "./Navbar";
import Ola from "../assets/Oladoye_Jelili_Resume.pdf";
import Ade from "../assets/ade.png";
import './Resume.css';




const Resume = () => {

  return (
    <>
      <div>
        <Navbar />
        <div className="resume">
           <div>
             <img src={Ade} alt="Oladoye Jelili Ademola" className="bg" />
             <h2>Oladoye Jelili Ademola</h2>
           </div> 
        <div className="resume-page">
            <p>Welcome to my resume page, here you can view the overview of our services
                 and download my resume to learn more about my skills and experiences.</p>
            </div>
            </div>
        <div className="resume-content">
              <h1 className="h1">My Resume</h1>
              <p>Click the button below to download my updated resume.</p>
              <p>My resume highlights my skills, experiences, and projects that showcase my expertise in web development, data analysis, and graphic design.</p>
              <a href={Ola} download>
              <button>Download My Resume</button>
             </a>
           </div>
      </div>
    </>
  );
    
}
export default Resume;