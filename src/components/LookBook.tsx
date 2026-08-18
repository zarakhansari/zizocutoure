import { Link } from "react-router";

const Lookbook = () => {
    return (
        <section className="bg-white px-6 py-20 md:py-28">
            <div className="mx-auto max-w-5xl text-center">

                {/* Small heading */}
                <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                    Zizo Journal
                </p>

                {/* Main heading */}
                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#17233F] md:text-5xl lg:text-6xl">
                    Style That Tells
                    <span className="block italic">
                        Your Story
                    </span>
                </h2>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500">
                    Fashion is more than what you wear. It is a way to express
                    who you are, what you love, and how you see the world.
                    Discover pieces designed to become part of your story.
                </p>

                {/* Decorative line */}
                <div className="mx-auto my-10 h-px w-16 bg-[#9A7653]" />

                {/* Three columns */}
                <div className="grid gap-10 md:grid-cols-3">

                    {/* Item 1 */}
                    <div>
                        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D5CC] text-[#17233F]">
                            ✦
                        </div>

                        <h3 className="font-serif text-xl text-[#17233F]">
                            Designed With Intention
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            Thoughtful details and unique designs make every
                            Zizo piece special.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D5CC] text-[#17233F]">
                            ✦
                        </div>

                        <h3 className="font-serif text-xl text-[#17233F]">
                            Made For You
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            Comfortable silhouettes and versatile pieces made
                            for everyday confidence.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div>
                        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D5CC] text-[#17233F]">
                            ✦
                        </div>

                        <h3 className="font-serif text-xl text-[#17233F]">
                            Wear Your Confidence
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            Express your personality and make every outfit
                            uniquely yours.
                        </p>
                    </div>

                </div>

                {/* Button */}
                <Link
                    to="/new-in"
                    className="mt-12 inline-block bg-[#17233F] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#9A7653]"
                >
                    Shop Zizo Couture
                </Link>

            </div>
        </section>
    );
};

export default Lookbook;