import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import StorySection from "./components/StorySection";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CategorySection />
        <ProductSection />
        <StorySection />
      </main>
    </>
  );
}

export default App;