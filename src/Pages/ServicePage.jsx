import React from 'react';
import Navbar from '../Components/Navbar'
import Website from "../assets/website.png";
import Graphic from "../assets/graphic.png";

const ServicePage = () => {
  return (
    <>
    <Navbar />
      <div className="servicepage">
        <div>
        <img src={Website} alt="Developer" className="bg" />
        <h2> Services I Offer</h2>
        </div>
  
        <div className="h3">
           <p>Frontend Web Development
            I craft responsive, user-friendly websites and web apps using HTML, CSS, JavaScript, and React focused on clean design and performance.

            Data Analysis
            I analyze and visualize data using tools like Excel, Power BI, and to help clients make smart, data-driven decisions.

            Graphic Design
            From logos to social media posts and UI mockups, I create visually compelling content using Canva,Figma, and other design tools.
        
            Prompt Engineering
            I build smart, AI-enhanced workflows using tools like ChatGPT, optimizing tasks such as content creation, automation, and idea generation.
            Let’s bring your ideas to life with the perfect blend of creativity, code, data, and AI.
            </p>
            <img src={Graphic} alt="Graphics" className="bg" />
        </div>
      </div>
    </>
  )
}

export default ServicePage;
  


