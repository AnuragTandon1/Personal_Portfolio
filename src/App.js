import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/skills/Skill";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Skill/>
    <Works/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
