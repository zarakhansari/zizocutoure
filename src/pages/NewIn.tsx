import { useState } from "react";
import { useCart } from "../cartContext/CartContext";

const products = [
    {
        id: 1,
        name: "Embroidered Denim Jacket",
        price: 129,
        image: "/images/jacket.jpeg",
        category: "Jackets",
        sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
        id: 2,
        name: "Floral Embroidered Skirt",
        price: 89,
        image: "/images/skirt.jpeg",
        category: "Skirts",
        sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
        id: 3,
        name: "Wide Leg Trousers",
        price: 95,
        image: "/images/trousers.jpeg",
        category: "Trousers",
        sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
        id: 4,
        name: "Embroidered T-Shirt",
        price: 59,
        image: "/images/Tshirt.jpeg",
        category: "T-Shirts",
        sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
        id: 5,
        name: "Zizo Denim Cap",
        price: 39,
        image: "/images/Cap.jpeg",
        category: "Accessories",
        sizes: ["One Size"],
    },
];

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

    const handleAddToCart = (product: (typeof products)[number]) => {
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

                    <div className="mb-8 flex items-center justify-between border-b border-[#D9D5CC] pb-4">
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                            New Collection
                        </p>

                        <p className="text-xs text-gray-500">
                            {products.length} Products
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

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

                                    {/* Image */}
                                    <div className="relative aspect-[3/4] overflow-hidden bg-white">

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        />

                                        <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[9px] uppercase tracking-widest text-[#17233F]">
                                            New
                                        </span>

                                    </div>

                                    {/* Product Information */}
                                    <div className="pt-5">

                                        <p className="text-[10px] uppercase tracking-widest text-[#9A7653]">
                                            {product.category}
                                        </p>

                                        <h2 className="mt-2 font-serif text-xl text-[#17233F]">
                                            {product.name}
                                        </h2>

                                        <p className="mt-2 text-sm text-gray-600">
                                            €{product.price}
                                        </p>

                                        {/* Sizes */}
                                        <div className="mt-5">

                                            <p className="mb-3 text-[10px] uppercase tracking-widest text-[#17233F]">
                                                Size
                                            </p>

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
                                                        className={`border px-4 py-2 text-xs transition ${selectedSize === size
                                                            ? "border-[#17233F] bg-[#17233F] text-white"
                                                            : "border-[#D9D5CC] bg-white text-[#17233F] hover:border-[#17233F]"
                                                            }`}
                                                    >
                                                        {size}
                                                    </button>
                                                ))}

                                            </div>

                                        </div>

                                        {/* Quantity */}
                                        <div className="mt-5">

                                            <p className="mb-3 text-[10px] uppercase tracking-widest text-[#17233F]">
                                                Quantity
                                            </p>

                                            <div className="flex w-fit items-center border border-[#D9D5CC] bg-white">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        changeQuantity(
                                                            product.id,
                                                            -1
                                                        )
                                                    }
                                                    className="px-4 py-2 text-lg hover:text-[#9A7653]"
                                                >
                                                    −
                                                </button>

                                                <span className="min-w-10 text-center text-sm">
                                                    {quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        changeQuantity(
                                                            product.id,
                                                            1
                                                        )
                                                    }
                                                    className="px-4 py-2 text-lg hover:text-[#9A7653]"
                                                >
                                                    +
                                                </button>

                                            </div>

                                        </div>

                                        {/* Add To Cart */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleAddToCart(product)
                                            }
                                            className="mt-6 w-full bg-[#17233F] py-4 text-xs uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#9A7653]"
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