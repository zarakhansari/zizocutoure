import { useEffect, useState } from "react";

const Hero = () => {
    const images = [
        "/images/model1.jpeg",
        "/images/model2.jpeg",
        "/images/model3.jpeg",
        "/images/model4.jpeg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="bg-[#F8F6F0]">
            <div className="mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl grid-cols-1 md:grid-cols-2">

                {/* Text */}
                <div className="flex items-center px-8 py-16 md:px-12 lg:px-20">
                    <div className="max-w-lg">

                        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                            Zizo Couture
                        </p>

                        <h1 className="font-serif text-5xl leading-tight text-[#17233F] sm:text-6xl lg:text-7xl">
                            Bloom With
                            <span className="block italic">
                                Confidence
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-600">
                            Discover our latest collection of timeless pieces,
                            designed to bring elegance, comfort and personality
                            to your everyday style.
                        </p>

                        <button
                            type="button"
                            className="mt-8 bg-[#17233F] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#9A7653]"
                        >
                            Shop The Collection
                        </button>

                    </div>
                </div>

                {/* Image */}
                <div className="relative min-h-[500px] overflow-hidden md:min-h-full">

                    <img
                        src={images[currentImage]}
                        alt="Zizo Couture collection"
                        className="h-full w-full object-cover object-center transition-all duration-1000 ease-in-out scale-105"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-black/5" />

                </div>

            </div>
        </section>
    );
};

export default Hero;