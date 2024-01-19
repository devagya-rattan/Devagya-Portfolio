import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
   <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
   </>
  );
}

export default App;
