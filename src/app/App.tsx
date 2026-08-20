import Header from "./layout/header/Header"
import Footer from "./layout/footer/Footer"
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/HomePage";
import About from "../pages/about/AboutPage";
import Projects from "../pages/projects/ProjectPage";
import Contact from "../pages/contact/ContactPage";


function App() {
  
  return (
    <>
      <Header />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      
    </>
  )
}

export default App
