
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

function Navbar() {
  return (
    <nav>
      <div class="navbar">
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/about">About</Link> */}
        <Contacts />
      </div>
    </nav>
  );
}

function Contacts() {
  return (
    <div className="social-links">
      <FaLinkedinIn size={18} style={{ color: "#433F4E" }} url="https://www.linkedin.com/in/catherinemaster/" />
      <FaGithub size={18} style={{ color: "#433F4E" }} url="https://github.com/cathiemaster" />
      {/* <MdOutlineMailOutline size={30} style={{ color: "#433F4E" }} /> */}
    </div>
  )
}

export default App;