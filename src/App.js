import './App.css';
import NavBar from "./components/Navbar/Navbar"
import Title from "./components/TypeText/Title"
import Carousel from "./components/Carousel/Carousel"
import About from "./pages/About/About"


function App() {
  return (
    <div className="App">
     <NavBar/> 
     <Carousel/>
      <Title/>
      <About/>
  

    
       
    </div>
  );
}

export default App;

