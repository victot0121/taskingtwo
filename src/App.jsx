
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePages";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./Pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import Resume from "./components/Resume";
import ServicePage from "./pages/ServicePage";



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