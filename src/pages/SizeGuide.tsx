const SizeGuide = () => {
    return (
        <main className="min-h-screen bg-[#F8F6F0]">

            {/* Header */}
            <section className="px-6 pb-12 pt-20 text-center md:pt-28">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                    Find Your Fit
                </p>

                <h1 className="mt-4 font-serif text-5xl text-[#17233F] md:text-6xl">
                    Size Guide
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
                    Use our size guide to find the perfect fit for your
                    Zizo Couture pieces.
                </p>
            </section>

            {/* Size Guide Image */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-5xl overflow-hidden bg-white p-4 shadow-sm md:p-8">

                    <img
                        src="/images/size_guide.jpeg"
                        alt="Zizo Couture size guide"
                        className="mx-auto h-auto w-full object-contain"
                    />

                </div>
            </section>

            {/* Fit Advice */}
            <section className="border-t border-[#D9D5CC] bg-white px-6 py-16">
                <div className="mx-auto max-w-3xl text-center">

                    <h2 className="font-serif text-3xl text-[#17233F]">
                        Need Help Choosing Your Size?
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
                        If you're between sizes, we recommend choosing the larger
                        size for a more comfortable fit. You can also contact our
                        customer care team if you need help choosing the right size.
                    </p>

                    <a
                        href="mailto:hello@zizocouture.com"
                        className="mt-8 inline-block bg-[#17233F] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#9A7653]"
                    >
                        Contact Us
                    </a>

                </div>
            </section>

        </main>
    );
};

export default SizeGuide;