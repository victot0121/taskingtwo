import React from 'react';
import Navbar from "./Navbar";
import Ola from "../assets/Oladoye_Jelili_Resume.pdf";


const ResumePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <h2 className="h2">My Resume</h2>
        <p>Click the button below to download my updated resume.</p>
        <p>My resume highlights my skills, experiences, and projects that showcase my expertise in web development, data analysis, and graphic design.</p>
        <a href={Ola} download>
          <button>Download My Resume</button>
        </a>
      </div>
    </>
  );
    
}
export default ResumePage