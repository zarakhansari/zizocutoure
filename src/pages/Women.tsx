const models = [
    {
        image: "/images/model1.jpg",
        title: "Denim & Blooms",
    },
    {
        image: "/images/model1.jpeg",
        title: "Everyday Elegance",
    },
    {
        image: "/images/model2.jpeg",
        title: "The Statement Edit",
    },
    {
        image: "/images/model3.jpeg",
        title: "Modern Romance",
    },
    {
        image: "/images/model4.jpeg",
        title: "Effortless Style",
    },
    {
        image: "/images/model5.jpeg",
        title: "Zizo Signature",
    },
];

const Women = () => {
    return (
        <main className="bg-[#F8F6F0]">

            {/* Page Header */}
            <section className="px-6 pb-12 pt-20 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                    Zizo Couture
                </p>

                <h1 className="mt-4 font-serif text-5xl text-[#17233F] md:text-6xl">
                    Women
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
                    Discover our collection of contemporary pieces,
                    playful details and timeless silhouettes designed
                    for confident women.
                </p>
            </section>

            {/* Model Gallery */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-7xl">

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {models.map((model) => (
                            <div
                                key={model.image}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden bg-white">

                                    <img
                                        src={model.image}
                                        alt={model.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                                    {/* Title */}
                                    <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                        <h2 className="font-serif text-2xl text-white">
                                            {model.title}
                                        </h2>

                                        <p className="mt-2 text-xs uppercase tracking-widest text-white/80">
                                            Shop The Look
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
};

export default Women;