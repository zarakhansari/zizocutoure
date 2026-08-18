import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import StorySection from "./components/StorySection";
import Lookbook from "./components/LookBook";
import Benefits from "./components/Benefits";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CategorySection />
        <ProductSection />
        <StorySection />
        <Lookbook />
        <Benefits />
      </main>
    </>
  );
}

export default App;