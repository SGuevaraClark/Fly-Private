import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Search from "./Components/Search/Search.jsx";
import Introduction from "./Components/Introduction/Introduction.jsx";
import Services from "./Components/Services/Services.jsx";
import Advantages from "./Components/Advantages/Advantages.jsx";
import CabinExperience from "./Components/CabinExperience/CabinExperience.jsx";
import Destinations from "./Components/Destinations/Destinations.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
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
      <CabinExperience />
      <Destinations />
      <Advantages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;