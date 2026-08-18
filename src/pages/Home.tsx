import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import StorySection from "../components/StorySection";
import Lookbook from "../components/LookBook";
import Benefits from "../components/Benefits";
import Newsletter from "../components/NewsLetter";

const Home = () => {
    return (
        <main>
            <Hero />
            <CategorySection />
            <ProductSection />
            <StorySection />
            <Lookbook />
            <Benefits />
            <Newsletter />
        </main>
    );
};

export default Home;