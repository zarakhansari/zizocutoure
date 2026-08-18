import { Link } from "react-router";

const Navbar = () => {
    return (
        <header className="bg-[#faf9f5] text-[#17233f]">

            {/* Announcement Bar */}
            <div className="bg-[#17233f] py-2 text-center text-xs tracking-wider text-white">
                NEW COLLECTION IS HERE — FREE SHIPPING ON ORDERS OVER $150
            </div>

            {/* Main Navbar */}
            <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-gray-200 px-6 py-5">

                {/* Logo */}
                <Link
                    to="/"
                    className="font-serif text-2xl tracking-[0.2em]"
                >
                    ZIZO COUTURE
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 text-xs uppercase tracking-widest md:flex">
                    <Link
                        to="/"
                        className="transition duration-300 hover:text-[#8c6b4f]"
                    >
                        Home
                    </Link>

                    <Link
                        to="/new-in"
                        className="transition duration-300 hover:text-[#8c6b4f]"
                    >
                        New In
                    </Link>

                    <Link
                        to="/women"
                        className="transition duration-300 hover:text-[#8c6b4f]"
                    >
                        Women
                    </Link>



                    <Link
                        to="/accessories"
                        className="transition duration-300 hover:text-[#8c6b4f]"
                    >
                        Accessories
                    </Link>

                    <Link
                        to="/about"
                        className="transition duration-300 hover:text-[#8c6b4f]"
                    >
                        About Us
                    </Link>
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-5">

                    {/* Search */}
                    <button
                        type="button"
                        aria-label="Search"
                        className="transition duration-300 hover:text-[#8c6b4f]"
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
                                d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
                            />
                        </svg>
                    </button>

                    {/* Account */}
                    <button
                        type="button"
                        aria-label="Account"
                        className="hidden transition duration-300 hover:text-[#8c6b4f] sm:block"
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
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0"
                            />
                        </svg>
                    </button>

                    {/* Cart */}
                    <button
                        type="button"
                        aria-label="Shopping cart"
                        className="relative transition duration-300 hover:text-[#8c6b4f]"
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

                        {/* Cart number */}
                        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#17233f] text-[9px] text-white">
                            0
                        </span>
                    </button>

                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex items-center justify-center gap-5 border-b border-gray-200 px-4 py-3 text-[10px] uppercase tracking-wider md:hidden">
                <Link to="/" className="hover:text-[#8c6b4f]">
                    Home
                </Link>

                <Link to="/women" className="hover:text-[#8c6b4f]">
                    Women
                </Link>

                <Link to="/men" className="hover:text-[#8c6b4f]">
                    Men
                </Link>

                <Link to="/accessories" className="hover:text-[#8c6b4f]">
                    Accessories
                </Link>
            </nav>

        </header>
    );
};

export default Navbar;