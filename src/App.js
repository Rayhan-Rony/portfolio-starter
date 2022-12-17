import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext)
  const darkmode = theme.state.darkmode
  return (
    <div className="App" style={{
      background: darkmode ? "black" : "",
      color: darkmode ? 'white' : ""
    }}>
      <Navbar />
      <Intro />
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
