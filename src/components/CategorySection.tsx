import { Link } from "react-router";

const categories = [
    {
        name: "Jackets",
        image: "/images/jacket.jpeg",
        link: "/women",
    },
    {
        name: "Skirts",
        image: "/images/skirt.jpeg",
        link: "/women",
    },
    {
        name: "Trousers",
        image: "/images/trousers.jpeg",
        link: "/women",
    },
    {
        name: "T-Shirts",
        image: "/images/Tshirt.jpeg",
        link: "/women",
    },
    {
        name: "Accessories",
        image: "/images/Cap.jpeg",
        link: "/accessories",
    },
];

const CategorySection = () => {
    return (
        <section className="bg-white px-6 py-20 md:py-28">
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                        Explore
                    </p>

                    <h2 className="font-serif text-4xl text-[#17233F] md:text-5xl">
                        Shop by Category
                    </h2>

                    <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500">
                        Discover carefully designed pieces made to bring
                        character and elegance to your wardrobe.
                    </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">

                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={category.link}
                            className="group"
                        >
                            {/* Image */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-[#F8F6F0]">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/25" />

                                {/* Category name */}
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <h3 className="text-center font-serif text-xl text-white drop-shadow-md">
                                        {category.name}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default CategorySection;