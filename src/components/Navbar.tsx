import { Link } from "react-router";
import { useCart } from "../cartContext/CartContext";
import { useState } from "react";

const Navbar = () => {
    const { cartCount } = useCart();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-[#D9D5CC] bg-[#F8F6F0]/95 backdrop-blur">

            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* ========================= */}
                {/* LOGO */}
                {/* ========================= */}

                <Link
                    to="/"
                    onClick={closeMenu}
                    className="font-serif text-2xl tracking-wide text-[#17233F]"
                >
                    Zizo Couture
                </Link>

                {/* ========================= */}
                {/* DESKTOP NAVIGATION */}
                {/* ========================= */}

                <div className="hidden items-center gap-8 md:flex">

                    <Link
                        to="/"
                        className="text-xs uppercase tracking-[0.2em] text-[#17233F] transition hover:text-[#9A7653]"
                    >
                        Home
                    </Link>

                    <Link
                        to="/new-in"
                        className="text-xs uppercase tracking-[0.2em] text-[#17233F] transition hover:text-[#9A7653]"
                    >
                        New In
                    </Link>

                    <Link
                        to="/faq"
                        className="text-xs uppercase tracking-[0.2em] text-[#17233F] transition hover:text-[#9A7653]"
                    >
                        FAQ
                    </Link>

                    <Link
                        to="/size-guide"
                        className="text-xs uppercase tracking-[0.2em] text-[#17233F] transition hover:text-[#9A7653]"
                    >
                        Size Guide
                    </Link>

                </div>

                {/* ========================= */}
                {/* DESKTOP CART */}
                {/* ========================= */}

                <div className="hidden md:block">

                    <Link
                        to="/cart"
                        aria-label="Shopping cart"
                        className="relative inline-flex text-[#17233F] transition-colors duration-300 hover:text-[#9A7653]"
                    >

                        {/* Cart SVG */}
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.086.835L5.61 6.75m0 0h13.92c.684 0 1.2.64 1.04 1.305l-1.5 6.25a1.125 1.125 0 0 1-1.09.87H8.25a1.125 1.125 0 0 1-1.09-.87L5.61 6.75Zm2.64 9.75a1.5 1.5 0 1 0 3 0m4.5 0a1.5 1.5 0 1 0 3 0"
                            />
                        </svg>

                        {/* Cart Count */}
                        {cartCount > 0 && (
                            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#17233F] text-[9px] text-white">
                                {cartCount}
                            </span>
                        )}

                    </Link>

                </div>

                {/* ========================= */}
                {/* MOBILE BUTTONS */}
                {/* ========================= */}

                <div className="flex items-center gap-5 md:hidden">

                    {/* Mobile Cart */}
                    <Link
                        to="/cart"
                        aria-label="Shopping cart"
                        className="relative text-[#17233F]"
                    >

                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.086.835L5.61 6.75m0 0h13.92c.684 0 1.2.64 1.04 1.305l-1.5 6.25a1.125 1.125 0 0 1-1.09.87H8.25a1.125 1.125 0 0 1-1.09-.87L5.61 6.75Zm2.64 9.75a1.5 1.5 0 1 0 3 0m4.5 0a1.5 1.5 0 1 0 3 0"
                            />
                        </svg>

                        {cartCount > 0 && (
                            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#17233F] text-[9px] text-white">
                                {cartCount}
                            </span>
                        )}

                    </Link>

                    {/* Hamburger */}
                    <button
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(true)}
                        className="text-[#17233F]"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 7h16M4 12h16M4 17h16"
                            />
                        </svg>
                    </button>

                </div>

            </nav>

            {/* ========================= */}
            {/* MOBILE MENU */}
            {/* ========================= */}

            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-[#F8F6F0] md:hidden">

                    {/* Mobile Menu Header */}
                    <div className="flex h-20 items-center justify-between border-b border-[#D9D5CC] px-6">

                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="font-serif text-2xl tracking-wide text-[#17233F]"
                        >
                            Zizo Couture
                        </Link>

                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={closeMenu}
                            className="text-[#17233F]"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 6l12 12M18 6L6 18"
                                />
                            </svg>
                        </button>

                    </div>

                    {/* Mobile Links */}
                    <div className="flex flex-col px-6 pt-10">

                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="border-b border-[#D9D5CC] py-5 font-serif text-2xl text-[#17233F]"
                        >
                            Home
                        </Link>

                        <Link
                            to="/new-in"
                            onClick={closeMenu}
                            className="border-b border-[#D9D5CC] py-5 font-serif text-2xl text-[#17233F]"
                        >
                            New In
                        </Link>

                        <Link
                            to="/faq"
                            onClick={closeMenu}
                            className="border-b border-[#D9D5CC] py-5 font-serif text-2xl text-[#17233F]"
                        >
                            FAQ
                        </Link>

                        <Link
                            to="/size-guide"
                            onClick={closeMenu}
                            className="border-b border-[#D9D5CC] py-5 font-serif text-2xl text-[#17233F]"
                        >
                            Size Guide
                        </Link>

                        <Link
                            to="/cart"
                            onClick={closeMenu}
                            className="mt-8 bg-[#17233F] py-5 text-center text-xs uppercase tracking-[0.25em] text-white transition hover:bg-[#9A7653]"
                        >
                            View Cart
                            {cartCount > 0 && ` (${cartCount})`}
                        </Link>

                    </div>

                </div>
            )}

        </header>
    );
};

export default Navbar;