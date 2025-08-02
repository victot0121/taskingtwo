import { Link } from "react-router-dom";
import "./Footer.css";

 const Footer = () => {

  return (
    <footer className="copy">
      <p>&copy; 2025 Oladoye Jelili Ademola. All rights reserved.</p>
      <div className="socialmedia">
        <a href="https://github.com/DOYDEV1982" target="github" >GitHub</a>
        <a href="https://www.linkedin.com/in/oladoye-jelili-921b3915a" target="linkedin">LinkedIn</a>
        <a href="https://www.instagram.com/ademola_adeniyi" target="_instagram" >Instagram</a>
        <a href="mailto:oladoyejelili@yahoo.com" >Email</a>
      </div>
    </footer>
  );
};

export default Footer;