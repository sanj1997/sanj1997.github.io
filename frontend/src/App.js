import logo from './logo.svg';
import './App.css';
import Navbar from './Sections/Navbar';
import Home from './Sections/home';
import About from './Sections/about';
import Skills from './Sections/skills';
import Projects from './Sections/projects';
import Contact from './Sections/contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
