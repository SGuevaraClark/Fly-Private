import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Search from "./Components/Search/Search.jsx";
import Introduction from "./Components/Introduction/Introduction.jsx";
import Services from "./Components/Services/Services.jsx";
import Advantages from "./Components/Advantages/Advantages.jsx";
import CabinExperience from "./Components/CabinExperience/CabinExperience.jsx";
import Destinations from "./Components/Destinations/Destinations.jsx";
import ContactComponent from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
import Blog from "./Pages/Blog.jsx";
import BlogPost from "./Pages/BlogPost.jsx";
import Contact from "./Pages/Contact.jsx";
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
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop scroll={scroll} />
        <Navbar scroll={scroll} />
        
        <Routes>
          {/* Home route */}
          <Route path="/" element={
            <>
              <Home />
              <Search />
              <Introduction />
              <Services />
              <CabinExperience />
              <Destinations />
              <Advantages />
              <ContactComponent />
            </>
          } />
          
          {/* Blog routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/category/:category" element={<BlogCategoryWrapper />} />
          <Route path="/blog/:slug" element={<BlogPostWrapper />} />
          
          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

// Wrapper component to extract category param from URL
function BlogCategoryWrapper() {
  const { category } = useParams();
  return <Blog category={category} />;
}

// Wrapper component to extract slug param from URL
function BlogPostWrapper() {
  const { slug } = useParams();
  return <BlogPost slug={slug} />;
}

export default App;