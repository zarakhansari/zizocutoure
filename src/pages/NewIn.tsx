import { useState } from "react";
import { useCart } from "../cartContext/CartContext";
import { products } from "../data/products";

const NewIn = () => {
    const { addToCart } = useCart();

    const [selectedSizes, setSelectedSizes] = useState<
        Record<number, string>
    >({});

    const [quantities, setQuantities] = useState<
        Record<number, number>
    >({});

    const selectSize = (productId: number, size: string) => {
        setSelectedSizes((current) => ({
            ...current,
            [productId]: size,
        }));
    };

    const changeQuantity = (
        productId: number,
        amount: number
    ) => {
        setQuantities((current) => ({
            ...current,
            [productId]: Math.max(
                1,
                (current[productId] || 1) + amount
            ),
        }));
    };

    const handleAddToCart = (
        product: (typeof products)[number]
    ) => {
        const selectedSize =
            selectedSizes[product.id] || product.sizes[0];

        const quantity = quantities[product.id] || 1;

        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: selectedSize,
            quantity,
        });
    };

    return (
        <main className="min-h-screen bg-[#F8F6F0]">

            {/* ========================= */}
            {/* PAGE HEADER */}
            {/* ========================= */}

            <section className="px-5 pb-12 pt-16 text-center sm:px-6 md:pb-20 md:pt-28">

                <p className="text-[10px] uppercase tracking-[0.3em] text-[#9A7653] sm:text-xs">
                    The Latest
                </p>

                <h1 className="mt-3 font-serif text-4xl text-[#17233F] sm:text-5xl md:text-6xl">
                    New In
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">
                    Discover the latest pieces from Zizo Couture,
                    designed with unique details and effortless style.
                </p>

            </section>

            {/* ========================= */}
            {/* PRODUCTS */}
            {/* ========================= */}

            <section className="px-5 pb-20 sm:px-6 md:pb-24">

                <div className="mx-auto max-w-7xl">

                    {/* Collection Header */}
                    <div className="mb-6 flex items-center justify-between border-b border-[#D9D5CC] pb-4 sm:mb-8">

                        <p className="text-[10px] uppercase tracking-widest text-gray-500 sm:text-xs">
                            New Collection
                        </p>

                        <p className="text-[10px] text-gray-500 sm:text-xs">
                            {products.length} Products
                        </p>

                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">

                        {products.map((product) => {

                            const selectedSize =
                                selectedSizes[product.id] ||
                                product.sizes[0];

                            const quantity =
                                quantities[product.id] || 1;

                            return (
                                <article
                                    key={product.id}
                                    className="group"
                                >

                                    {/* ========================= */}
                                    {/* IMAGE */}
                                    {/* ========================= */}

                                    <div className="relative aspect-[3/4] overflow-hidden bg-white">

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                                        />

                                        {/* New Badge */}
                                        <span className="absolute left-3 top-3 bg-white px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-[#17233F] sm:left-4 sm:top-4 sm:text-[9px]">
                                            New
                                        </span>

                                    </div>

                                    {/* ========================= */}
                                    {/* PRODUCT INFO */}
                                    {/* ========================= */}

                                    <div className="pt-4 sm:pt-5">

                                        <div className="flex items-start justify-between gap-4">

                                            <div>

                                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#9A7653] sm:text-[10px]">
                                                    {product.category}
                                                </p>

                                                <h2 className="mt-1.5 font-serif text-lg text-[#17233F] sm:text-xl">
                                                    {product.name}
                                                </h2>

                                            </div>

                                            <p className="shrink-0 pt-1 text-sm text-[#17233F]">
                                                €{product.price}
                                            </p>

                                        </div>

                                        {/* ========================= */}
                                        {/* SIZE */}
                                        {/* ========================= */}

                                        <div className="mt-5">

                                            <div className="mb-3 flex items-center justify-between">

                                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#17233F] sm:text-[10px]">
                                                    Size
                                                </p>

                                                <span className="text-[9px] text-gray-400">
                                                    Selected: {selectedSize}
                                                </span>

                                            </div>

                                            <div className="flex flex-wrap gap-2">

                                                {product.sizes.map((size) => (

                                                    <button
                                                        key={size}
                                                        type="button"
                                                        onClick={() =>
                                                            selectSize(
                                                                product.id,
                                                                size
                                                            )
                                                        }
                                                        className={`min-w-[42px] border px-3 py-2.5 text-[10px] transition sm:min-w-[46px] sm:px-4 ${selectedSize === size
                                                                ? "border-[#17233F] bg-[#17233F] text-white"
                                                                : "border-[#D9D5CC] bg-white text-[#17233F] hover:border-[#17233F]"
                                                            }`}
                                                    >
                                                        {size}
                                                    </button>

                                                ))}

                                            </div>

                                        </div>

                                        {/* ========================= */}
                                        {/* QUANTITY */}
                                        {/* ========================= */}

                                        <div className="mt-5 flex items-center justify-between">

                                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#17233F] sm:text-[10px]">
                                                Quantity
                                            </p>

                                            <div className="flex items-center border border-[#D9D5CC] bg-white">

                                                <button
                                                    type="button"
                                                    aria-label="Decrease quantity"
                                                    onClick={() =>
                                                        changeQuantity(
                                                            product.id,
                                                            -1
                                                        )
                                                    }
                                                    className="flex h-10 w-10 items-center justify-center text-lg text-[#17233F] transition hover:text-[#9A7653]"
                                                >
                                                    −
                                                </button>

                                                <span className="flex h-10 w-10 items-center justify-center border-x border-[#D9D5CC] text-xs text-[#17233F]">
                                                    {quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    aria-label="Increase quantity"
                                                    onClick={() =>
                                                        changeQuantity(
                                                            product.id,
                                                            1
                                                        )
                                                    }
                                                    className="flex h-10 w-10 items-center justify-center text-lg text-[#17233F] transition hover:text-[#9A7653]"
                                                >
                                                    +
                                                </button>

                                            </div>

                                        </div>

                                        {/* ========================= */}
                                        {/* ADD TO CART */}
                                        {/* ========================= */}

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleAddToCart(product)
                                            }
                                            className="mt-5 w-full bg-[#17233F] py-4 text-[10px] uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-[#9A7653] sm:py-5 sm:text-xs"
                                        >
                                            Add To Cart
                                        </button>

                                    </div>

                                </article>
                            );
                        })}

                    </div>

                </div>

            </section>

        </main>
    );
};

export default NewIn;