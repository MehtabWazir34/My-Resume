import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/AboutMe";
import { motion } from "framer-motion";
import ContactMe from "./Pages/ContactMe";
import { Toaster } from "sonner";
import { useEffect, useState, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
function App() {
  const [scrolled, setScrolled] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      setScrolled(section.scrollTop > 10);
    };

    section.addEventListener("scroll", handleScroll);
    return () => section.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <Analytics mode="production"/>
      <main className="bg-primary text-white min-h-screen flex justify-center items-start px-2 py-6">
        <section
          ref={sectionRef}
          className="w-[95%] md:w-[80%] max-w-6xl rounded-2xl shadow-2xl shadow-blue-900 bg-secondary relative overflow-y-auto max-h-[calc(100vh-3rem)] scrollbarHide"
        >
          {/* HEADER */}
          <header
            className={`sticky top-0 z-50 flex justify-between items-center p-2 md:p-4  transition-all duration-300 ${
              scrolled
                ? "mx-3 mt-2 rounded-2xl border border-gray-700 backdrop-blur-md bg-secondary/60 shadow-lg shadow-blue-900/30"
                : "border-b border-gray-700"
            }`}
          >
            <div className="grid">
              <div className="gap-1 justify-center -mt-2 flex">
                <div className="rounded-full w-3 h-3 bg-yellow-500 animate-pulse"></div>
                <div className="rounded-full w-3 h-3 bg-accent animate-pulse"></div>
                <div className="rounded-full w-3 h-3 bg-blue-500 animate-pulse"></div>
              </div>
              <Link to={'/'} className="md:text-xl text-sm font-semibold tracking-wide font-heading animate-pulse text-accent">
                WAZIR
              </Link>
            </div>

            <nav>
              <motion.ul
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex gap-3 md:gap-6 text-sm md:text-base font-body"
              >
                <li>
                <Link to="/" className="hover:scale-105 hover:text-yellow-500 cursor-pointer transition duration-200">Home</Link>
                </li>
                <li>

                <Link to="/about-me" className="hover:scale-105 hover:text-accent cursor-pointer transition duration-200">About</Link>
                </li>
                <li>
                <Link to="/contact-me" className="hover:scale-105 hover:text-blue-500 cursor-pointer transition duration-200">Contact</Link>
                </li>
              </motion.ul>
            </nav>
          </header>

          <Toaster position="top-center" />
          <div className="py-4 md:p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<About />} />
              <Route path="/contact-me" element={<ContactMe />} />
            </Routes>
          </div>
        <footer className="w-full flex flex-col justify-center -space-y-2 text-center border-t border-gray-700 p-2 md:p-4 bg-secondary/60 font-heading text-xs tracking-widest ">Made with Passion <br /> <span className="text-[12px]  font-heading">WAZIR</span></footer>
        </section>
      </main>
    </>
  );
}

export default App;