import "./App.css";
import Nav from "./component/nav";
import AboutMe from "./component/aboutMe";
import Stack from "./component/stack";
import Education from "./component/education";
import Proyectos from "./component/proyectos";
import Contacto from "./component/contact";

function App() {
  return (
    <div className="container">
      <Nav></Nav>
      <AboutMe>
        <Stack></Stack>
      </AboutMe>
      <div id="educacion">
        <Education></Education>
      </div>
      <div id="proyectos">
        <Proyectos></Proyectos>
      </div>
      <div id="contacto">
        <Contacto></Contacto>
      </div>
    </div>
  );
}

export default App;
