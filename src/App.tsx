import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import SizeGuide from "./pages/SizeGuide";
import NewIn from "./pages/NewIn";
import Women from "./pages/Women";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route path="/new-in" element={<NewIn />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App; 