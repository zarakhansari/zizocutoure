import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#F8F6F0] text-[#17233F]">

            {/* Main Footer */}
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

                {/* Brand */}
                <div>
                    <Link
                        to="/"
                        className="font-serif text-2xl tracking-[0.18em]"
                    >
                        ZIZO COUTURE
                    </Link>

                    <p className="mt-5 max-w-xs text-sm leading-7 text-gray-500">
                        Timeless pieces with character, designed to help
                        you express your individual style.
                    </p>


                </div>

                {/* Shop */}
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em]">
                        Shop
                    </h3>

                    <ul className="mt-5 space-y-3 text-sm text-gray-500">
                        <li>
                            <Link
                                to="/new-in"
                                className="transition-colors hover:text-[#17233F]"
                            >
                                New In
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/women"
                                className="transition-colors hover:text-[#17233F]"
                            >
                                Women
                            </Link>
                        </li>

                        <li>

                            <Link
                                to="/accessories"
                                className="transition-colors hover:text-[#17233F]"
                            >
                                Accessories
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Customer Care */}
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em]">
                        Customer Care
                    </h3>

                    <ul className="mt-5 space-y-3 text-sm text-gray-500">
                        <li>
                            <Link
                                to="/contact"
                                className="transition-colors hover:text-[#17233F]"
                            >
                                Contact Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/shipping"
                                className="transition-colors hover:text-[#17233F]"
                            >
                                Shipping & Delivery
                            </Link>
                        </li>
                        <Link
                            to="/faq"
                            className="transition-colors hover:text-[#17233F]"
                        >
                            FAQ
                        </Link>
                        <li>

                        </li>

                        <li>
                            <Link
                                to="/size-guide"
                                className="transition-colors hover:text-[#17233F]"
                            >
                                Size Guide
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* About */}
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em]">
                        About Zizo
                    </h3>

                    <ul className="mt-5 space-y-3 text-sm text-gray-500">
                        <li>
                            <Link
                                to="/about"
                                className="transition-colors hover:text-[#17233F]"
                            >
                                Our Story
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/journal"
                                className="transition-colors hover:text-[#17233F]"
                            >
                                Zizo Journal
                            </Link>
                        </li>

                        <li>

                        </li>

                        <li>
                            <Link
                                to="/privacy"
                                className="transition-colors hover:text-[#17233F]"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-[#D9D5CC]">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © 2026 Zizo Couture. All rights reserved.
                    </p>

                    <p>
                        Made with style & intention.
                    </p>

                </div>
            </div>

        </footer>
    );
};

export default Footer;