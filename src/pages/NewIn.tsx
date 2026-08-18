import { Link } from "react-router";

const products = [
    {
        id: 1,
        name: "Embroidered Denim Jacket",
        price: "€129",
        image: "/images/jacket.jpeg",
        category: "Jackets",
    },
    {
        id: 2,
        name: "Floral Embroidered Skirt",
        price: "€89",
        image: "/images/skirt.jpeg",
        category: "Skirts",
    },
    {
        id: 3,
        name: "Wide Leg Trousers",
        price: "€95",
        image: "/images/trousers.jpeg",
        category: "Trousers",
    },
    {
        id: 4,
        name: "Embroidered T-Shirt",
        price: "€59",
        image: "/images/Tshirt.jpeg",
        category: "T-Shirts",
    },
    {
        id: 5,
        name: "Zizo Denim Cap",
        price: "€39",
        image: "/images/Cap.jpeg",
        category: "Accessories",
    },
];

const NewIn = () => {
    return (
        <main className="min-h-screen bg-[#F8F6F0]">

            {/* Page Header */}
            <section className="px-6 pb-14 pt-20 text-center md:pb-20 md:pt-28">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                    The Latest
                </p>

                <h1 className="mt-4 font-serif text-5xl text-[#17233F] md:text-6xl">
                    New In
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
                    Discover the latest pieces from Zizo Couture,
                    designed with unique details and effortless style.
                </p>
            </section>

            {/* Products */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-7xl">

                    {/* Product count */}
                    <div className="mb-8 flex items-center justify-between border-b border-[#D9D5CC] pb-4">
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                            New Collection
                        </p>

                        <p className="text-xs text-gray-500">
                            {products.length} Products
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">

                        {products.map((product) => (
                            <article
                                key={product.id}
                                className="group"
                            >
                                {/* Image */}
                                <Link to={`/product/${product.id}`}>
                                    <div className="relative aspect-[3/4] overflow-hidden bg-white">

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        />

                                        {/* New badge */}
                                        <span className="absolute left-3 top-3 bg-white px-3 py-2 text-[9px] uppercase tracking-widest text-[#17233F]">
                                            New
                                        </span>

                                        {/* Wishlist */}
                                        <button
                                            type="button"
                                            aria-label={`Add ${product.name} to wishlist`}
                                            onClick={(event) => event.preventDefault()}
                                            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#17233F] transition hover:text-[#9A7653]"
                                        >
                                            ♡
                                        </button>

                                        {/* Quick Add */}
                                        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-[#17233F] transition duration-300 group-hover:translate-y-0">
                                            <button
                                                type="button"
                                                className="w-full py-4 text-[10px] uppercase tracking-[0.2em] text-white"
                                            >
                                                Quick Add
                                            </button>
                                        </div>

                                    </div>
                                </Link>

                                {/* Product Details */}
                                <div className="pt-4">

                                    <p className="text-[9px] uppercase tracking-widest text-[#9A7653]">
                                        {product.category}
                                    </p>

                                    <Link to={`/product/${product.id}`}>
                                        <h2 className="mt-2 font-serif text-lg text-[#17233F] transition hover:text-[#9A7653]">
                                            {product.name}
                                        </h2>
                                    </Link>

                                    <p className="mt-2 text-sm text-gray-600">
                                        {product.price}
                                    </p>

                                </div>
                            </article>
                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
};

export default NewIn;