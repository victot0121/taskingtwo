
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePages";
import AboutPage from "./Pages/AboutPage";
import SkillPage from "./Pages/SkillPage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import Resume from "./Components/Resume";
import ServicePage from "./Pages/ServicePage";



 function App() {

  return (
    <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skillPage" element={<SkillPage />} />
            <Route path="/projectPage" element={<ProjectPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service" element={<ServicePage />} />
          </Routes>
    </Router>
  );
}

export default App;