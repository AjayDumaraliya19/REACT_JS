import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
