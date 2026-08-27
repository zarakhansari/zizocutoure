import { Link } from "react-router";

const OrderConfirmation = () => {
    return (
        <main className="flex min-h-[75vh] items-center justify-center bg-[#F8F6F0] px-6 py-20">
            <div className="w-full max-w-2xl bg-white px-6 py-14 text-center md:px-12">

                {/* Check Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#9A7653] text-2xl text-[#9A7653]">
                    ✓
                </div>

                <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                    Thank You
                </p>

                <h1 className="mt-4 font-serif text-4xl text-[#17233F] md:text-5xl">
                    Order Confirmed
                </h1>

                <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-500">
                    Your Zizo Couture order has been successfully placed.
                    We’ll send you an email with your order details and
                    shipping information.
                </p>

                {/* Order Number */}
                <div className="mx-auto mt-8 max-w-sm border-y border-[#D9D5CC] py-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        Order Number
                    </p>

                    <p className="mt-2 font-serif text-xl text-[#17233F]">
                        ZIZO-2026-001
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

                    <Link
                        to="/new-in"
                        className="bg-[#17233F] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#9A7653]"
                    >
                        Continue Shopping
                    </Link>

                    <Link
                        to="/"
                        className="border border-[#17233F] px-8 py-4 text-xs uppercase tracking-[0.2em] text-[#17233F] transition duration-300 hover:bg-[#17233F] hover:text-white"
                    >
                        Back To Home
                    </Link>

                </div>

            </div>
        </main>
    );
};

export default OrderConfirmation;