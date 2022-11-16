import ContactMe from "./components/ContactMe";
import FirstPage from "./components/FirstPage";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      {/* <div id="navbar">
          <Navbar />
      </div>

      <div id="first-page">
        <FirstPage />
      </div> */}
      
      <div id="about-me">
        <AboutMe />
      </div>

      {/* <div id="project">
        <Project />
      </div>
      
      <div id="contact-me">
        <ContactMe />
      </div> */}
    </div>
  );
}

export default App;
