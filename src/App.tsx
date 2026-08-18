import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CategorySection />
        <ProductSection />
      </main>
    </>
  );
}

export default App;