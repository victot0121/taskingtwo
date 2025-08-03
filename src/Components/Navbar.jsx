import { Link } from 'react-router-dom';
import Doydev from '../assets/doydev.png';
import './Navbar.css';

const Navbar = () => {

  return (
    <>
    <div className="NavUp">
      <div className= "Logo" style={{display:"flex", justifyContent:"space-between", backgroundColor: "#0f0f0"}}>
      <img src= {Doydev} alt="Doydev Logo" style={{width:"100px", height:"100px"}}/>
      </div>
    
     <div className="Nav">
      <ul> 
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/service"><li>Service</li></Link>
        <Link to="/resume"><li>Resume</li></Link>
        <Link to="/projectPage"><li>Project</li></Link>
        <Link to="/skillPage"><li>Skill</li></Link>
      </ul>
     </div>
    </div>
    </>
    
  );
}
export default Navbar;