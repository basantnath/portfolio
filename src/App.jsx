import React from "react";
import Profile from "./components/Profile.jsx";
import Contact from "./components/Contact.jsx";
import ForYou from "./components/ForYou.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Greeting from "./components/Greeting.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Gallery from "./components/Gallery.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full ">
      <ScrollProgressBar />
      <ScrollToTop />
      <Greeting />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <ForYou />
      <Gallery />
      <Contact />
      <Navbar />
    </div>
  );
}
