import ContactMe from "./components/ContactMe";
import FirstPage from "./components/FirstPage";
import IntroductionPage from "./components/IntroductionPage";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Navbar />

      <FirstPage />

      <IntroductionPage />

      <Project />
      
      <ContactMe />
    </div>
  );
}

export default App;
