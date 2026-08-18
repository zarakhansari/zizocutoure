import { Link } from "react-router";

const StorySection = () => {
    return (
        <section className="bg-[#17233F] px-6 py-20 text-white md:py-28">
            <div className="mx-auto max-w-7xl">

                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">

                    {/* Images */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="overflow-hidden">
                            <img
                                src="/images/model2.jpeg"
                                alt="Zizo Couture collection"
                                className="h-[400px] w-full object-cover transition duration-700 hover:scale-105 md:h-[520px]"
                            />
                        </div>

                        <div className="mt-12 overflow-hidden">
                            <img
                                src="/images/model3.jpeg"
                                alt="Zizo Couture fashion"
                                className="h-[400px] w-full object-cover transition duration-700 hover:scale-105 md:h-[520px]"
                            />
                        </div>

                    </div>

                    {/* Text */}
                    <div className="max-w-lg">

                        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D4B08A]">
                            The Zizo Story
                        </p>

                        <h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
                            Clothes With
                            <span className="block italic">
                                Character
                            </span>
                        </h2>

                        <p className="mt-7 text-sm leading-7 text-gray-300">
                            At Zizo Couture, we believe fashion should feel personal.
                            Our collections combine timeless silhouettes with playful
                            details, embroidery and unexpected touches.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-gray-300">
                            Every piece is designed to help you express your individuality
                            while feeling comfortable and confident in what you wear.
                        </p>

                        <Link
                            to="/about"
                            className="mt-8 inline-block border border-white px-8 py-4 text-xs uppercase tracking-[0.2em] transition duration-300 hover:bg-white hover:text-[#17233F]"
                        >
                            Discover Our Story
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default StorySection;