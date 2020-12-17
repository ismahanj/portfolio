import './App.css';
import NavBar from "./components/Navbar/Navbar"
import Title from "./components/TypeText/Title"
import Carousel from "./components/Carousel/Carousel"
import About from "./pages/About/About"
import { Parallax, Background } from "react-parallax"
import Fade from "react-reveal/Fade"
import Container from "react-bootstrap/Container"
import Image1 from "./assets/background.jpg"



function App() {
  return (
    <div className="App" style={{position: "relative"}}>
     <NavBar/> 
     <Carousel/>
      <Title/>
      <div>
      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={Image1}
        bgImageAlt="lights"
        strength={-200}
    >
        <div>
      <Container className="container-box rounded">
        <Fade duration={500}>
      <About/>
      </Fade>
      </Container>
      </div>
      </Parallax>
      </div>  
    </div>
  );
}

export default App;

