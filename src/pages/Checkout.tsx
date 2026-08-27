import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../cartContext/CartContext";

const Checkout = () => {
    const navigate = useNavigate();

    const {
        cartItems,
        cartTotal,
        clearCart,
    } = useCart();

    // Form data
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });

    // Form errors
    const [errors, setErrors] = useState({
        email: "",
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });

    // Shipping
    const shipping =
        cartTotal >= 150 || cartTotal === 0 ? 0 : 9.99;

    const total = cartTotal + shipping;

    // Handle input changes
    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));

        // Remove error when user starts correcting the field
        setErrors((current) => ({
            ...current,
            [name]: "",
        }));
    };

    // Place order
    const handlePlaceOrder = () => {
        const newErrors = {
            email: "",
            fullName: "",
            address: "",
            city: "",
            postalCode: "",
            country: "",
        };

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!formData.email.includes("@")) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        // Address validation
        if (!formData.address.trim()) {
            newErrors.address = "Address is required.";
        }

        // City validation
        if (!formData.city.trim()) {
            newErrors.city = "City is required.";
        }

        // Postal code validation
        if (!formData.postalCode.trim()) {
            newErrors.postalCode = "Postal code is required.";
        }

        // Country validation
        if (!formData.country) {
            newErrors.country = "Please select a country.";
        }

        setErrors(newErrors);

        // Check if there are errors
        const hasErrors = Object.values(newErrors).some(
            (error) => error !== ""
        );

        if (hasErrors) {
            return;
        }

        // Clear cart and go to confirmation
        clearCart();

        navigate("/order-confirmation");
    };

    // If cart is empty
    if (cartItems.length === 0) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center bg-[#F8F6F0] px-6">
                <div className="text-center">

                    <p className="text-4xl text-[#9A7653]">
                        ♡
                    </p>

                    <h1 className="mt-5 font-serif text-4xl text-[#17233F]">
                        Your Cart Is Empty
                    </h1>

                    <p className="mt-4 text-sm text-gray-500">
                        Add something beautiful before checking out.
                    </p>

                    <Link
                        to="/new-in"
                        className="mt-8 inline-block bg-[#17233F] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#9A7653]"
                    >
                        Shop New In
                    </Link>

                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#F8F6F0] px-6 py-16 md:py-24">

            <div className="mx-auto max-w-7xl">

                {/* Page Header */}
                <div className="mb-12">

                    <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                        Zizo Couture
                    </p>

                    <h1 className="mt-4 font-serif text-5xl text-[#17233F]">
                        Checkout
                    </h1>

                </div>

                {/* Main Layout */}
                <div className="grid gap-12 lg:grid-cols-[1fr_400px]">

                    {/* ========================= */}
                    {/* LEFT SIDE - CHECKOUT FORM */}
                    {/* ========================= */}

                    <section className="bg-white p-6 md:p-10">

                        {/* Contact Information */}
                        <div>

                            <h2 className="font-serif text-2xl text-[#17233F]">
                                Contact Information
                            </h2>

                            <div className="mt-6">

                                <label
                                    htmlFor="email"
                                    className="text-xs uppercase tracking-wider text-[#17233F]"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={`mt-2 w-full border bg-[#F8F6F0] px-4 py-3 text-sm outline-none transition ${errors.email
                                            ? "border-red-400"
                                            : "border-[#D9D5CC] focus:border-[#17233F]"
                                        }`}
                                />

                                {errors.email && (
                                    <p className="mt-2 text-xs text-red-600">
                                        {errors.email}
                                    </p>
                                )}

                            </div>

                        </div>

                        {/* ========================= */}
                        {/* DELIVERY ADDRESS */}
                        {/* ========================= */}

                        <div className="mt-12">

                            <h2 className="font-serif text-2xl text-[#17233F]">
                                Delivery Address
                            </h2>

                            <div className="mt-6 grid gap-5 sm:grid-cols-2">

                                {/* Full Name */}
                                <div className="sm:col-span-2">

                                    <label
                                        htmlFor="fullName"
                                        className="text-xs uppercase tracking-wider text-[#17233F]"
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className={`mt-2 w-full border bg-[#F8F6F0] px-4 py-3 text-sm outline-none transition ${errors.fullName
                                                ? "border-red-400"
                                                : "border-[#D9D5CC] focus:border-[#17233F]"
                                            }`}
                                    />

                                    {errors.fullName && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.fullName}
                                        </p>
                                    )}

                                </div>

                                {/* Address */}
                                <div className="sm:col-span-2">

                                    <label
                                        htmlFor="address"
                                        className="text-xs uppercase tracking-wider text-[#17233F]"
                                    >
                                        Address
                                    </label>

                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Street and house number"
                                        className={`mt-2 w-full border bg-[#F8F6F0] px-4 py-3 text-sm outline-none transition ${errors.address
                                                ? "border-red-400"
                                                : "border-[#D9D5CC] focus:border-[#17233F]"
                                            }`}
                                    />

                                    {errors.address && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.address}
                                        </p>
                                    )}

                                </div>

                                {/* City */}
                                <div>

                                    <label
                                        htmlFor="city"
                                        className="text-xs uppercase tracking-wider text-[#17233F]"
                                    >
                                        City
                                    </label>

                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="City"
                                        className={`mt-2 w-full border bg-[#F8F6F0] px-4 py-3 text-sm outline-none transition ${errors.city
                                                ? "border-red-400"
                                                : "border-[#D9D5CC] focus:border-[#17233F]"
                                            }`}
                                    />

                                    {errors.city && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.city}
                                        </p>
                                    )}

                                </div>

                                {/* Postal Code */}
                                <div>

                                    <label
                                        htmlFor="postalCode"
                                        className="text-xs uppercase tracking-wider text-[#17233F]"
                                    >
                                        Postal Code
                                    </label>

                                    <input
                                        id="postalCode"
                                        name="postalCode"
                                        type="text"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        placeholder="Postal code"
                                        className={`mt-2 w-full border bg-[#F8F6F0] px-4 py-3 text-sm outline-none transition ${errors.postalCode
                                                ? "border-red-400"
                                                : "border-[#D9D5CC] focus:border-[#17233F]"
                                            }`}
                                    />

                                    {errors.postalCode && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.postalCode}
                                        </p>
                                    )}

                                </div>

                                {/* Country */}
                                <div className="sm:col-span-2">

                                    <label
                                        htmlFor="country"
                                        className="text-xs uppercase tracking-wider text-[#17233F]"
                                    >
                                        Country
                                    </label>

                                    <select
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className={`mt-2 w-full border bg-[#F8F6F0] px-4 py-3 text-sm outline-none transition ${errors.country
                                                ? "border-red-400"
                                                : "border-[#D9D5CC] focus:border-[#17233F]"
                                            }`}
                                    >

                                        <option value="" disabled>
                                            Select country
                                        </option>

                                        <option value="netherlands">
                                            Netherlands
                                        </option>

                                        <option value="germany">
                                            Germany
                                        </option>

                                        <option value="belgium">
                                            Belgium
                                        </option>

                                        <option value="france">
                                            France
                                        </option>

                                        <option value="other">
                                            Other
                                        </option>

                                    </select>

                                    {errors.country && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.country}
                                        </p>
                                    )}

                                </div>

                            </div>

                        </div>

                        {/* ========================= */}
                        {/* PAYMENT */}
                        {/* ========================= */}

                        <div className="mt-12">

                            <h2 className="font-serif text-2xl text-[#17233F]">
                                Payment
                            </h2>

                            <p className="mt-2 text-xs leading-5 text-gray-500">
                                This is a demo checkout. No real payment will be processed.
                            </p>

                            <div className="mt-6 space-y-4">

                                {/* Card */}
                                <label className="flex cursor-pointer items-center gap-3 border border-[#D9D5CC] bg-[#F8F6F0] p-4">

                                    <input
                                        type="radio"
                                        name="payment"
                                        value="card"
                                        defaultChecked
                                    />

                                    <span className="text-sm text-[#17233F]">
                                        Credit / Debit Card
                                    </span>

                                </label>

                                {/* PayPal */}
                                <label className="flex cursor-pointer items-center gap-3 border border-[#D9D5CC] bg-[#F8F6F0] p-4">

                                    <input
                                        type="radio"
                                        name="payment"
                                        value="paypal"
                                    />

                                    <span className="text-sm text-[#17233F]">
                                        PayPal
                                    </span>

                                </label>

                            </div>

                        </div>

                        {/* ========================= */}
                        {/* PLACE ORDER */}
                        {/* ========================= */}

                        <button
                            type="button"
                            onClick={handlePlaceOrder}
                            className="mt-10 w-full bg-[#17233F] py-5 text-xs uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-[#9A7653]"
                        >
                            Place Order
                        </button>

                    </section>

                    {/* ========================= */}
                    {/* RIGHT SIDE - ORDER SUMMARY */}
                    {/* ========================= */}

                    <aside className="h-fit bg-white p-7 md:p-8">

                        <h2 className="font-serif text-2xl text-[#17233F]">
                            Your Order
                        </h2>

                        {/* Products */}
                        <div className="mt-8 divide-y divide-[#D9D5CC]">

                            {cartItems.map((item) => (

                                <div
                                    key={`${item.id}-${item.size}`}
                                    className="flex gap-4 py-5 first:pt-0"
                                >

                                    {/* Image */}
                                    <div className="h-20 w-16 shrink-0 overflow-hidden bg-[#F8F6F0]">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-cover"
                                        />

                                    </div>

                                    {/* Product Information */}
                                    <div className="flex-1">

                                        <h3 className="font-serif text-base text-[#17233F]">
                                            {item.name}
                                        </h3>

                                        <p className="mt-1 text-xs text-gray-500">
                                            Size: {item.size} · Qty: {item.quantity}
                                        </p>

                                    </div>

                                    {/* Item Total */}
                                    <p className="text-sm text-[#17233F]">
                                        €{(item.price * item.quantity).toFixed(2)}
                                    </p>

                                </div>

                            ))}

                        </div>

                        {/* Price Summary */}
                        <div className="mt-4 space-y-4 border-t border-[#D9D5CC] pt-6">

                            {/* Subtotal */}
                            <div className="flex justify-between text-sm">

                                <span className="text-gray-500">
                                    Subtotal
                                </span>

                                <span className="text-[#17233F]">
                                    €{cartTotal.toFixed(2)}
                                </span>

                            </div>

                            {/* Shipping */}
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

                            {/* Total */}
                            <div className="flex justify-between border-t border-[#D9D5CC] pt-5">

                                <span className="font-serif text-xl text-[#17233F]">
                                    Total
                                </span>

                                <span className="text-xl text-[#17233F]">
                                    €{total.toFixed(2)}
                                </span>

                            </div>

                        </div>

                    </aside>

                </div>

            </div>

        </main>
    );
};

export default Checkout;