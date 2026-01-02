import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        
        <div>
          <Navbar />
          <Home />
          <Skills />
          <Projects />
          <About />
          <Contact />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;