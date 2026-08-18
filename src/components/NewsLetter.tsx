const Newsletter = () => {
    return (
        <section className="bg-[#17233F] px-6 py-20 text-white md:py-24">
            <div className="mx-auto max-w-3xl text-center">

                <p className="text-xs uppercase tracking-[0.3em] text-[#D4B08A]">
                    Stay In The Loop
                </p>

                <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                    Join the Zizo World
                </h2>

                <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-300">
                    Sign up for new collection updates, exclusive offers,
                    styling inspiration and more.
                </p>

                <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="min-h-12 flex-1 border border-white/30 bg-transparent px-5 text-sm text-white outline-none placeholder:text-gray-400 focus:border-white"
                    />

                    <button
                        type="submit"
                        className="min-h-12 bg-white px-7 text-xs uppercase tracking-[0.2em] text-[#17233F] transition duration-300 hover:bg-[#D4B08A]"
                    >
                        Subscribe
                    </button>
                </form>

                <p className="mt-4 text-[10px] text-gray-400">
                    By subscribing, you agree to receive emails from Zizo Couture.
                </p>

            </div>
        </section>
    );
};

export default Newsletter;