import { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../cartContext/CartContext";
import { products } from "../data/products";

const ProductSection = () => {
    const { addToCart } = useCart();

    const [selectedSizes, setSelectedSizes] = useState<
        Record<number, string>
    >({});

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

                        <article
                            key={product.id}
                            className="group"
                        >

                            {/* Product Image */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-white">

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

                            </div>

                            {/* Product Information */}
                            <div className="pt-5">

                                {/* Name + Price */}
                                <div className="flex items-start justify-between gap-4">

                                    <div>

                                        <p className="mb-2 text-[10px] uppercase tracking-widest text-[#9A7653]">
                                            {product.category}
                                        </p>

                                        <Link to={`/product/${product.id}`}>
                                            <h3 className="font-serif text-lg text-[#17233F] transition-colors duration-300 hover:text-[#9A7653]">
                                                {product.name}
                                            </h3>
                                        </Link>

                                    </div>

                                    <p className="shrink-0 text-sm text-gray-600">
                                        {typeof product.price === "number"
                                            ? `€${product.price}`
                                            : product.price}
                                    </p>

                                </div>

                                {/* Size Selection */}
                                <div className="mt-5">

                                    <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#17233F]">
                                        Select Size
                                    </p>

                                    <div className="flex flex-wrap gap-2">

                                        {product.sizes.map((size) => (

                                            <button
                                                key={size}
                                                type="button"
                                                onClick={() =>
                                                    setSelectedSizes((current) => ({
                                                        ...current,
                                                        [product.id]: size,
                                                    }))
                                                }
                                                className={`min-w-[42px] border px-3 py-2 text-[10px] transition ${selectedSizes[product.id] === size
                                                    ? "border-[#17233F] bg-[#17233F] text-white"
                                                    : "border-[#D9D5CC] bg-white text-[#17233F] hover:border-[#17233F]"
                                                    }`}
                                            >
                                                {size}
                                            </button>

                                        ))}

                                    </div>

                                </div>

                                {/* Add To Basket */}
                                <button
                                    type="button"
                                    disabled={!selectedSizes[product.id]}
                                    onClick={() => {

                                        const selectedSize =
                                            selectedSizes[product.id];

                                        if (!selectedSize) return;

                                        addToCart({
                                            id: product.id,
                                            name: product.name,
                                            price:
                                                typeof product.price === "number"
                                                    ? product.price
                                                    : Number(
                                                        product.price.replace("€", "")
                                                    ),
                                            image: product.image,
                                            size: selectedSize,
                                            quantity: 1,
                                        });

                                    }}
                                    className="mt-5 w-full cursor-pointer bg-[#17233F] py-4 text-[10px] uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-[#9A7653] disabled:cursor-not-allowed disabled:bg-gray-300"                                >
                                    {selectedSizes[product.id]
                                        ? "Add To Basket"
                                        : "Select A Size"}
                                </button>

                            </div>

                        </article>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default ProductSection;