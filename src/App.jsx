import { useEffect, useState } from "react";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Support from "./Components/Support/Support";
import Info from "./Components/Info/Info";
import Lounge from "./Components/Lounge/Lounge";
import Travelers from "./Components/Travelers/Travelers";
import Subscribe from "./Components/Subscribe/Subscribe";
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
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;