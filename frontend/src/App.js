import logo from './logo.svg';
import './App.css';
import Navbar from './Sections/Navbar';
import Home from './Sections/home';
import About from './Sections/about';
import Skills from './Sections/skills';
import Projects from './Sections/projects';
import Contact from './Sections/contact';
import styles from "./Styles/main.module.css"
import BottomNav from './Sections/bottomNav';
import Statistics from './Sections/statistics';

function App() {
  return (
    <div className={styles}>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Statistics/>
      <Contact/>
      <BottomNav/>
      
    </div>
  );
}

export default App;
