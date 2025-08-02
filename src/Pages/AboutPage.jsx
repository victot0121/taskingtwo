import Ade from "../assets/ade.png";
import Navbar from "../Components/Navbar";


const AboutPage = () => {

  return (
    <>
      <div>
      <Navbar />
      <div className="about">
         <div className='about-title'>
            <h1 className='h1'> About Me </h1>
            <p className='p'> Hi! I'm Oladoye Jelili Ademola, a passionate digital creative blending design, data, and to craft purposeful solutions.</p>
          </div>
      </div>      
          <div className='about-image'>
            <img src={Ade} alt='Oladoye Jelili Ademola'  className="bg"/>

            <p className='p'> A digital creative with a passion for design, data, and technology.</p>
        
      </div>

      <div className='about-section'>

          <div className='about-task-title'>
            <h2 className='h2'>What I Do</h2>
            <p> I specialize in creating digital experiences that are not only visually appealing but also functional and user-friendly.</p>
            <p> As a Frontend Web Developer, I bring ideas to life with clean, responsive, and user-centered interfaces using tools like HTML, CSS, JavaScript, and React.</p>
            <p> With a strong foundation in Data Analysis, I enjoy uncovering insights and transforming raw data into actionable visual stories. </p>
            <p> My work as a  Graphic Designer empowers me to create visually compelling content and intuitive user interfaces. </p> 
            <p> I'm also skilled in Prompt Engineering , leveraging AI tools like ChatGPT to build smart, creative, and scalable solutions.</p>
            <p> I'm committed to solving real-world problems at the intersection of technology, creativity, and strategy.</p>       
          </div>
          <div className='button'>
            <button className='btn-black'>Contact Us</button>
          </div>
      </div>
      </div>   
   </>
  );
};

export default AboutPage;
