import { useEffect, useState } from "react";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Introduction from "./Components/Introduction/Introduction";
import Services from "./Components/Services/Services";
import Advantages from "./Components/Advantages/Advantages";
import CabinExperience from "./Components/CabinExperience/CabinExperience";
import Destinations from "./Components/Destinations/Destinations";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import './main.css'

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop scroll={scroll} />
      <Navbar scroll={scroll} />
      <Home />
      <Search />
      <Introduction />
      <Services />
      <Advantages />
      <CabinExperience />
      <Destinations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;