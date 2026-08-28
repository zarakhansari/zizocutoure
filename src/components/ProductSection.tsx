import { Link } from "react-router";
import { useCart } from "../cartContext/CartContext";
import { products } from "../data/products";


const ProductSection = () => {
    const { addToCart } = useCart();
    return (
        <section className="bg-[#F8F6F0] px-6 py-20 md:py-28">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                    <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                            New Season
                        </p>

                        <h2 className="font-serif text-4xl text-[#17233F] md:text-5xl">
                            New Arrivals
                        </h2>
                    </div>

                    <Link
                        to="/new-in"
                        className="w-fit border-b border-[#17233F] pb-1 text-xs uppercase tracking-[0.2em] text-[#17233F] transition-colors duration-300 hover:border-[#9A7653] hover:text-[#9A7653]"
                    >
                        View All Products
                    </Link>

                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {products.map((product) => (
                        <article key={product.id} className="group">

                            {/* Product Image */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-white">

                                {/* Product Image */}
                                <Link to={`/product/${product.id}`}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    {/* New Badge */}
                                    <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] uppercase tracking-widest text-[#17233F]">
                                        New
                                    </span>
                                </Link>

                                {/* Wishlist */}
                                <button
                                    type="button"
                                    aria-label={`Add ${product.name} to wishlist`}
                                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#17233F] transition hover:text-[#9A7653]"
                                >
                                    ♡
                                </button>

                                {/* Quick Add */}
                                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-[#17233F] transition duration-300 group-hover:translate-y-0">

                                    <button
                                        type="button"
                                        onClick={() => {
                                            addToCart({
                                                id: product.id,
                                                name: product.name,
                                                price: Number(
                                                    product.price.replace("€", "")
                                                ),
                                                image: product.image,
                                                size: "M",
                                                quantity: 1,
                                            });
                                        }}
                                        className="w-full py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#9A7653]"
                                    >
                                        Quick Add
                                    </button>

                                </div>

                            </div>

                            {/* Product Information */}
                            <div className="pt-5">

                                <p className="mb-2 text-[10px] uppercase tracking-widest text-[#9A7653]">
                                    {product.category}
                                </p>

                                <Link to={`/product/${product.id}`}>
                                    <h3 className="font-serif text-lg text-[#17233F] transition-colors duration-300 hover:text-[#9A7653]">
                                        {product.name}
                                    </h3>
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
    );
};

export default ProductSection;