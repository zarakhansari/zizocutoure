import { Link } from "react-router";

const About = () => {
    return (
        <main className="bg-[#F8F6F0] text-[#17233F]">

            {/* Hero */}
            <section className="px-6 pb-20 pt-20 md:pb-28 md:pt-28">
                <div className="mx-auto max-w-4xl text-center">

                    <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                        About Zizo Couture
                    </p>

                    <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
                        Fashion With
                        <span className="block italic">
                            Character
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-500">
                        Zizo Couture is a fashion brand created for people who
                        believe that what they wear should reflect who they are.
                        We combine timeless silhouettes with playful details,
                        embroidery and distinctive designs.
                    </p>

                </div>
            </section>


            {/* Our Story */}
            <section className="bg-white px-6 py-20 md:py-28">
                <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">

                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            src="/images/model2.jpeg"
                            alt="Zizo Couture collection"
                            className="h-[550px] w-full object-cover transition duration-700 hover:scale-105 md:h-[650px]"
                        />
                    </div>

                    {/* Text */}
                    <div className="max-w-xl">

                        <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                            Our Story
                        </p>

                        <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                            Where Style Meets
                            <span className="block italic">
                                Personality
                            </span>
                        </h2>

                        <p className="mt-7 text-sm leading-7 text-gray-500">
                            Zizo Couture began with a simple idea: fashion should
                            be expressive, comfortable and fun.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-gray-500">
                            We believe the most memorable outfits are the ones
                            that feel like you. That's why our collections combine
                            classic pieces with unexpected details, from embroidered
                            denim to statement silhouettes.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-gray-500">
                            Every collection is created with the intention of giving
                            you pieces that can become part of your everyday wardrobe
                            while still making a statement.
                        </p>

                    </div>

                </div>
            </section>


            {/* What We Bring */}
            <section className="px-6 py-20 md:py-28">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 text-center">

                        <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                            Our Philosophy
                        </p>

                        <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                            What We Bring
                        </h2>

                    </div>

                    <div className="grid gap-6 md:grid-cols-3">

                        {/* Card 1 */}
                        <div className="border border-[#D9D5CC] bg-white p-8 md:p-10">

                            <span className="text-2xl text-[#9A7653]">
                                01
                            </span>

                            <h3 className="mt-6 font-serif text-2xl">
                                Individuality
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                We create pieces that help you express your own
                                personality rather than simply follow trends.
                            </p>

                        </div>


                        {/* Card 2 */}
                        <div className="border border-[#D9D5CC] bg-white p-8 md:p-10">

                            <span className="text-2xl text-[#9A7653]">
                                02
                            </span>

                            <h3 className="mt-6 font-serif text-2xl">
                                Quality
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                We pay attention to materials, details and construction
                                to create pieces you'll want to wear again and again.
                            </p>

                        </div>


                        {/* Card 3 */}
                        <div className="border border-[#D9D5CC] bg-white p-8 md:p-10">

                            <span className="text-2xl text-[#9A7653]">
                                03
                            </span>

                            <h3 className="mt-6 font-serif text-2xl">
                                Confidence
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                Our goal is simple: when you put on a Zizo piece,
                                you should feel comfortable, confident and completely yourself.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* Closing Statement */}
            <section className="bg-[#17233F] px-6 py-24 text-center text-white md:py-32">

                <div className="mx-auto max-w-3xl">

                    <p className="text-xs uppercase tracking-[0.3em] text-[#D4B08A]">
                        Zizo Couture
                    </p>

                    <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                        Wear What Makes
                        <span className="block italic">
                            You Feel You
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-300">
                        Discover pieces designed to become part of your story.
                    </p>

                    <Link
                        to="/women"
                        className="mt-8 inline-block border border-white px-8 py-4 text-xs uppercase tracking-[0.2em] transition duration-300 hover:bg-white hover:text-[#17233F]"
                    >
                        Explore The Collection
                    </Link>

                </div>

            </section>

        </main>
    );
};

export default About;