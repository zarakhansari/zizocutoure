import { Link } from "react-router";
import { useCart } from "../cartContext/CartContext";

const Cart = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal,
    } = useCart();

    const shipping = cartTotal >= 150 || cartTotal === 0 ? 0 : 9.99;

    const total = cartTotal + shipping;

    return (
        <main className="min-h-screen bg-[#F8F6F0] px-6 py-16 md:py-24">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                        Your Selection
                    </p>

                    <h1 className="mt-4 font-serif text-5xl text-[#17233F]">
                        Shopping Cart
                    </h1>
                </div>

                {/* Empty Cart */}
                {cartItems.length === 0 ? (
                    <div className="border-y border-[#D9D5CC] py-20 text-center">

                        <p className="text-4xl">♡</p>

                        <h2 className="mt-5 font-serif text-2xl text-[#17233F]">
                            Your cart is empty
                        </h2>

                        <p className="mt-3 text-sm text-gray-500">
                            Discover something beautiful from our latest collection.
                        </p>

                        <Link
                            to="/new-in"
                            className="mt-8 inline-block bg-[#17233F] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#9A7653]"
                        >
                            Continue Shopping
                        </Link>

                    </div>
                ) : (

                    /* Cart */
                    <div className="grid gap-12 lg:grid-cols-[1fr_380px]">

                        {/* Cart Items */}
                        <div>

                            <div className="border-b border-[#D9D5CC] pb-4">
                                <p className="text-xs uppercase tracking-widest text-gray-500">
                                    {cartItems.length}{" "}
                                    {cartItems.length === 1 ? "Item" : "Items"}
                                </p>
                            </div>

                            <div className="divide-y divide-[#D9D5CC]">

                                {cartItems.map((item) => (
                                    <div
                                        key={`${item.id}-${item.size}`}
                                        className="flex gap-5 py-8"
                                    >

                                        {/* Image */}
                                        <div className="h-36 w-28 shrink-0 overflow-hidden bg-white sm:h-44 sm:w-36">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        {/* Details */}
                                        <div className="flex flex-1 flex-col">

                                            <div className="flex justify-between gap-4">

                                                <div>
                                                    <p className="text-[10px] uppercase tracking-widest text-[#9A7653]">
                                                        Zizo Couture
                                                    </p>

                                                    <h2 className="mt-2 font-serif text-xl text-[#17233F]">
                                                        {item.name}
                                                    </h2>

                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Size: {item.size}
                                                    </p>
                                                </div>

                                                <p className="text-sm text-[#17233F]">
                                                    €{(item.price * item.quantity).toFixed(2)}
                                                </p>

                                            </div>

                                            {/* Quantity + Remove */}
                                            <div className="mt-auto flex items-center justify-between pt-5">

                                                <div className="flex items-center border border-[#D9D5CC] bg-white">

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.id,
                                                                item.size,
                                                                item.quantity - 1
                                                            )
                                                        }
                                                        className="px-4 py-2 text-lg text-[#17233F] hover:text-[#9A7653]"
                                                    >
                                                        −
                                                    </button>

                                                    <span className="min-w-10 text-center text-sm">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.id,
                                                                item.size,
                                                                item.quantity + 1
                                                            )
                                                        }
                                                        className="px-4 py-2 text-lg text-[#17233F] hover:text-[#9A7653]"
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeFromCart(
                                                            item.id,
                                                            item.size
                                                        )
                                                    }
                                                    className="text-xs uppercase tracking-wider text-gray-500 underline underline-offset-4 transition hover:text-[#9A7653]"
                                                >
                                                    Remove
                                                </button>

                                            </div>

                                        </div>

                                    </div>
                                ))}

                            </div>

                            {/* Continue Shopping */}
                            <Link
                                to="/new-in"
                                className="mt-8 inline-block text-xs uppercase tracking-[0.2em] text-[#17233F] underline underline-offset-4 transition hover:text-[#9A7653]"
                            >
                                ← Continue Shopping
                            </Link>

                        </div>
                        {/* Free Shipping Progress */}
                        <div className="mb-8 bg-white p-6 md:p-7">
                            {cartTotal >= 150 ? (
                                <>
                                    <div className="flex items-center gap-2">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#17233F] text-xs text-white">
                                            ✓
                                        </span>

                                        <p className="text-xs uppercase tracking-[0.15em] text-[#17233F]">
                                            You've unlocked free shipping
                                        </p>
                                    </div>

                                    <div className="mt-4 h-1 w-full bg-[#E5E1D9]">
                                        <div className="h-full w-full bg-[#17233F]" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="text-xs leading-5 text-[#17233F]">
                                        You're{" "}
                                        <span className="font-medium">
                                            €{(150 - cartTotal).toFixed(2)}
                                        </span>{" "}
                                        away from free shipping.
                                    </p>

                                    <div className="mt-4 h-1 w-full bg-[#E5E1D9]">
                                        <div
                                            className="h-full bg-[#17233F] transition-all duration-500"
                                            style={{
                                                width: `${Math.min(
                                                    (cartTotal / 150) * 100,
                                                    100
                                                )}%`,
                                            }}
                                        />
                                    </div>

                                    <p className="mt-3 text-[10px] uppercase tracking-wider text-gray-400">
                                        Free shipping on orders over €150
                                    </p>
                                </>
                            )}
                        </div>
                        {/* Order Summary */}
                        <aside className="h-fit bg-white p-7 md:p-8">

                            <h2 className="font-serif text-2xl text-[#17233F]">
                                Order Summary
                            </h2>

                            <div className="mt-8 space-y-5 border-b border-[#D9D5CC] pb-6">

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">
                                        Subtotal
                                    </span>

                                    <span className="text-[#17233F]">
                                        €{cartTotal.toFixed(2)}
                                    </span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">
                                        Shipping
                                    </span>

                                    <span className="text-[#17233F]">
                                        {shipping === 0
                                            ? "Free"
                                            : `€${shipping.toFixed(2)}`}
                                    </span>
                                </div>

                            </div>

                            <div className="flex justify-between py-6">

                                <span className="font-serif text-xl text-[#17233F]">
                                    Total
                                </span>

                                <span className="text-xl text-[#17233F]">
                                    €{total.toFixed(2)}
                                </span>

                            </div>

                            <Link
                                to="/checkout"
                                className="block w-full bg-[#17233F] py-5 text-center text-xs uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#9A7653]"
                            >
                                Proceed To Checkout
                            </Link>

                            <p className="mt-5 text-center text-xs leading-5 text-gray-500">
                                Free shipping on orders over €150.
                            </p>

                        </aside>

                    </div>
                )}

            </div>
        </main>
    );
};

export default Cart;