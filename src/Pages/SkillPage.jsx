import React from 'react';
import Navbar from '../Components/Navbar';
import Ade from '../assets/ade.png';

const SkillPage = () => {


  return (

    <>
    <div>
      <Navbar />
      <h2 className="h2"> Skills & Expertise</h2>
      <img src={Ade} alt="Oladoye Jelili Ademola" className="bg" />
      <p>I bring together a diverse and complementary skill set across tech, data, design, and AI, making me a versatile digital problem solver.</p>
      <div className="purpuse">
        <h3 className="h3">My Skills</h3>
        <p className="p-task">
        Frontend Web Development
        Skilled in building modern, responsive, and interactive websites using HTML, CSS, JavaScript, React, and Git. I translate ideas into sleek, functional user interfaces with a strong focus on performance and usability.

        Data Analysis
        Proficient in using Excel, Power BI, and  to clean, analyze, and visualize data — turning numbers into meaningful insights that drive decision-making.

       Graphic Design
       Experienced in crafting visually engaging content, UI mockups, and brand assets using tools like Figma, Canva, and Adobe tools. I combine design thinking with aesthetic balance to create standout visuals.
  
       Prompt Engineering
       I specialize in designing high-impact prompts for tools like ChatGPT, using AI to automate content, enhance workflows, and solve real-world problems creatively.
       With this multidisciplinary skill set, I’m equipped to build complete solutions  from code to creativity, from insight to interface.
      </p>
  
      </div>
  
    </div>
  </>
  );
};
export default  SkillPage;


  


    


     

       