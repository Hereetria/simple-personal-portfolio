import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Languages from "./components/Languages";

function App() {
  return (
    <Router>
      <div className="App d-flex">
        <Sidebar />
        <div className="container-fluid p-4">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/workexperience" element={<WorkExperience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/languages" element={<Languages />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
