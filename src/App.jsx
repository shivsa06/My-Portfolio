import styles from "./App.module.css";
import About from "./components/About/About";
import Skills from "./components/Experience/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <div className={styles.App}>
        <NavBar></NavBar>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
