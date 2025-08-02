import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ade from "../assets/ade.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Home.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div>
          <img src={Ade} alt="Oladoye Jelili Ademola" className="bg" />
           <h2>Oladoye Jelili Ademola</h2>
          </div>
         <div className="description">
           
            <p>Front-End Developer | Data Analyst | Prompt Engineer | Graphic Designs</p>
            <p>Passionate about solving creative, technical, and business
              problems using tools like ChatGPT, Canva, Figma, HTML, CSS,
              JavaScript, and React. Dedicated to building real-world solutions.
            </p>
          </div>
          
        </div>
    

      <Footer />
    </>
  );
};

export default HomePage;
