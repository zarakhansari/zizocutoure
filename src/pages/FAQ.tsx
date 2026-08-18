import { useState } from "react";

const faqSections = [
    {
        title: "Orders & Shipping",
        icon: "🛒",
        questions: [
            {
                question: "How long will it take to receive my order?",
                answer:
                    "Orders are usually processed within 1–2 business days. Delivery times depend on your location but typically take 3–7 business days.",
            },
            {
                question: "Do you offer international shipping?",
                answer:
                    "Yes, we ship worldwide! Shipping fees and delivery times vary depending on the destination.",
            },
            {
                question: "Can I track my order?",
                answer:
                    "Absolutely! Once your order has been shipped, you’ll receive a tracking number via email.",
            },
        ],
    },
    {
        title: "Returns & Exchanges",
        icon: "↩",
        questions: [
            {
                question: "What is your return policy?",
                answer:
                    "We accept returns within 14 days of purchase as long as items are unworn, unwashed, and with original tags.",
            },
            {
                question: "How do I exchange an item for a different size?",
                answer:
                    "You can request an exchange through our returns portal or by contacting customer support. We’ll guide you through the process.",
            },
        ],
    },
    {
        title: "Product & Sizing",
        icon: "👕",
        questions: [
            {
                question: "How do I know what size to order?",
                answer:
                    "Each product page has a detailed size guide. If you’re between sizes, we recommend sizing up for comfort.",
            },
            {
                question: "Are your clothes true to size?",
                answer:
                    "Most of our items are true to size, but we recommend checking the product description and size chart for specific fit details.",
            },
        ],
    },
    {
        title: "Payments & Discounts",
        icon: "💳",
        questions: [
            {
                question: "What payment methods do you accept?",
                answer:
                    "We accept major credit/debit cards, PayPal, and other secure payment methods available at checkout.",
            },
            {
                question: "Do you offer student or first-time buyer discounts?",
                answer:
                    "Yes! First-time customers get 10% off their first order when they subscribe to our newsletter.",
            },
        ],
    },
];

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    const toggleQuestion = (question: string) => {
        setOpenQuestion((current) =>
            current === question ? null : question
        );
    };

    return (
        <main className="min-h-screen bg-[#F8F6F0]">

            {/* Hero */}
            <section className="px-6 pb-16 pt-20 text-center md:pb-20 md:pt-28">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                    Customer Care
                </p>

                <h1 className="mt-4 font-serif text-5xl text-[#17233F] md:text-6xl">
                    Frequently Asked Questions
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500">
                    Find answers to the most common questions about orders,
                    shipping, returns, sizing and payments.
                </p>
            </section>

            {/* FAQ */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-4xl">

                    {faqSections.map((section) => (
                        <div key={section.title} className="mb-10">

                            {/* Category heading */}
                            <div className="mb-4 flex items-center gap-3 border-b border-[#D9D5CC] pb-4">
                                <span className="text-lg">
                                    {section.icon}
                                </span>

                                <h2 className="font-serif text-2xl text-[#17233F]">
                                    {section.title}
                                </h2>
                            </div>

                            {/* Questions */}
                            <div className="divide-y divide-[#D9D5CC] border-y border-[#D9D5CC]">
                                {section.questions.map((item) => {
                                    const isOpen = openQuestion === item.question;

                                    return (
                                        <div key={item.question}>

                                            {/* Question */}
                                            <button
                                                type="button"
                                                onClick={() => toggleQuestion(item.question)}
                                                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                                                aria-expanded={isOpen}
                                            >
                                                <span className="font-serif text-lg text-[#17233F] transition-colors duration-300 hover:text-[#9A7653]">
                                                    {item.question}
                                                </span>

                                                <span
                                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D9D5CC] text-[#17233F] transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                                        }`}
                                                >
                                                    +
                                                </span>
                                            </button>

                                            {/* Answer */}
                                            <div
                                                className={`grid transition-all duration-300 ${isOpen
                                                        ? "grid-rows-[1fr] pb-6 opacity-100"
                                                        : "grid-rows-[0fr] opacity-0"
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="max-w-3xl pr-12 text-sm leading-7 text-gray-500">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    ))}

                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-[#17233F] px-6 py-20 text-center text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4B08A]">
                    Still Have Questions?
                </p>

                <h2 className="mt-4 font-serif text-3xl md:text-4xl">
                    We're Here To Help
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-300">
                    If you couldn't find the answer you're looking for,
                    our customer care team is happy to help.
                </p>

                <button
                    type="button"
                    className="mt-8 border border-white px-8 py-4 text-xs uppercase tracking-[0.2em] transition duration-300 hover:bg-white hover:text-[#17233F]"
                >
                    Contact Us
                </button>
            </section>

        </main>
    );
};

export default FAQ;