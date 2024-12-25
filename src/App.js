import { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.classList.remove("dark", "light"); 
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="App">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
