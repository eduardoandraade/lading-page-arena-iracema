import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ImageCarousel from "./components/img/ImageCarousel";
import Footer from './components/Footer'
import Forms from "./components/Forms";

function App() {
  return (
<div w="100%" style={{ overflowX: 'hidden' }}>
      <Navbar />
      <ImageCarousel/>
      <Hero />
      <Forms />
      <Footer/>
    </div>
  );
}

export default App;
