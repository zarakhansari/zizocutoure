import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <main className="min-h-screen bg-[#F8F6F0]">

            {/* Page Header */}
            <section className="px-6 pb-14 pt-20 text-center md:pb-20 md:pt-28">

                <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                    We'd Love To Hear From You
                </p>

                <h1 className="mt-4 font-serif text-5xl text-[#17233F] md:text-6xl">
                    Contact Us
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
                    Have a question about an order, sizing, or one of our
                    pieces? Get in touch and we'll be happy to help.
                </p>

            </section>

            {/* Contact Content */}
            <section className="px-6 pb-20 md:pb-28">

                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* Contact Information */}
                    <div className="border-t border-[#D9D5CC] pt-8">

                        <p className="text-xs uppercase tracking-[0.25em] text-[#9A7653]">
                            Customer Care
                        </p>

                        <h2 className="mt-4 font-serif text-3xl text-[#17233F]">
                            Let's talk.
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
                            Whether you have a question about your order or
                            simply want to learn more about Zizo Couture,
                            we're here for you.
                        </p>

                        {/* Email */}
                        <div className="mt-10">

                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                                Email
                            </p>

                            <a
                                href="mailto:hello@zizocouture.com"
                                className="mt-2 inline-block text-sm text-[#17233F] transition hover:text-[#9A7653]"
                            >
                                hello@zizocouture.com
                            </a>

                        </div>

                        {/* Hours */}
                        <div className="mt-7">

                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                                Customer Care Hours
                            </p>

                            <p className="mt-2 text-sm leading-6 text-[#17233F]">
                                Monday – Friday
                                <br />
                                9:00 – 17:00
                            </p>

                        </div>

                        {/* Response */}
                        <div className="mt-7">

                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                                Response Time
                            </p>

                            <p className="mt-2 text-sm text-[#17233F]">
                                Usually within 1–2 business days.
                            </p>

                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 md:p-10">

                        {submitted ? (
                            <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#17233F] text-white">
                                    ✓
                                </span>

                                <h2 className="mt-6 font-serif text-3xl text-[#17233F]">
                                    Message Sent
                                </h2>

                                <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
                                    Thank you for getting in touch. We'll get back
                                    to you as soon as possible.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 border border-[#17233F] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#17233F] transition hover:bg-[#17233F] hover:text-white"
                                >
                                    Send Another Message
                                </button>

                            </div>
                        ) : (
                            <>
                                <h2 className="font-serif text-3xl text-[#17233F]">
                                    Send us a message
                                </h2>

                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-8 space-y-6"
                                >

                                    {/* Name */}
                                    <div>

                                        <label
                                            htmlFor="name"
                                            className="text-[10px] uppercase tracking-[0.2em] text-[#17233F]"
                                        >
                                            Full Name
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="mt-2 w-full border border-[#D9D5CC] bg-[#F8F6F0] px-4 py-3.5 text-sm text-[#17233F] outline-none transition focus:border-[#17233F]"
                                        />

                                    </div>

                                    {/* Email */}
                                    <div>

                                        <label
                                            htmlFor="email"
                                            className="text-[10px] uppercase tracking-[0.2em] text-[#17233F]"
                                        >
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@example.com"
                                            className="mt-2 w-full border border-[#D9D5CC] bg-[#F8F6F0] px-4 py-3.5 text-sm text-[#17233F] outline-none transition focus:border-[#17233F]"
                                        />

                                    </div>

                                    {/* Subject */}
                                    <div>

                                        <label
                                            htmlFor="subject"
                                            className="text-[10px] uppercase tracking-[0.2em] text-[#17233F]"
                                        >
                                            Subject
                                        </label>

                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="How can we help?"
                                            className="mt-2 w-full border border-[#D9D5CC] bg-[#F8F6F0] px-4 py-3.5 text-sm text-[#17233F] outline-none transition focus:border-[#17233F]"
                                        />

                                    </div>

                                    {/* Message */}
                                    <div>

                                        <label
                                            htmlFor="message"
                                            className="text-[10px] uppercase tracking-[0.2em] text-[#17233F]"
                                        >
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            placeholder="Write your message..."
                                            className="mt-2 w-full resize-none border border-[#D9D5CC] bg-[#F8F6F0] px-4 py-3.5 text-sm text-[#17233F] outline-none transition focus:border-[#17233F]"
                                        />

                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full bg-[#17233F] py-4 text-xs uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-[#9A7653]"
                                    >
                                        Send Message
                                    </button>

                                </form>
                            </>
                        )}

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Contact;