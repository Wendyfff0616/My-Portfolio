import { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  // 1. 在App里定义主题状态
  const [theme, setTheme] = useState("dark");

  // 2. 切换函数
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // 3. 如果想用“给 body 加类名”的方式切换CSS变量
  //    可以在 useEffect 里监听 theme 改变
  useEffect(() => {
    document.body.classList.remove("dark", "light"); 
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="App">
      {/* 把 theme 和 toggleTheme 传给 Navbar */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
