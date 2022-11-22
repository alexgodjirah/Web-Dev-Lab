import ContactMe from "./components/ContactMe";
import FirstPage from "./components/FirstPage";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <div id="navbar" className="background-color-1">
          <Navbar />
      </div>

      <div id="first-page" className="background-color-1">
        <FirstPage />
      </div>
      
      <div id="about-me" className="background-color-2">
        <AboutMe />
      </div>

      <div id="project" className="background-color-1">
        <Project />
      </div>
      
      <div id="contact-me" className="background-color-2">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
