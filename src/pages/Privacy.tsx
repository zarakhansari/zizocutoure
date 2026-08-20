const Privacy = () => {
    return (
        <main className="min-h-screen bg-[#F8F6F0]">

            {/* Header */}
            <section className="px-6 pb-14 pt-20 text-center md:pb-20 md:pt-28">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9A7653]">
                    Zizo Couture
                </p>

                <h1 className="mt-4 font-serif text-5xl text-[#17233F] md:text-6xl">
                    Privacy Policy
                </h1>

                <p className="mt-5 text-sm text-gray-500">
                    Last updated: August 2026
                </p>
            </section>

            {/* Content */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-4xl bg-white px-6 py-10 shadow-sm md:px-12 md:py-14">

                    {/* Introduction */}
                    <div className="space-y-4">
                        <p className="text-sm leading-7 text-gray-600">
                            At Zizo Couture, we respect your privacy and are committed
                            to protecting the personal information you share with us.
                            This Privacy Policy explains what information we collect,
                            how we use it, and how we protect it when you use our website.
                        </p>

                        <p className="text-sm leading-7 text-gray-600">
                            This page is provided as demo content for the Zizo Couture
                            website and should be reviewed and adapted to your actual
                            business, legal requirements, and data practices before
                            being used as a live privacy policy.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <div className="mt-12">
                        <h2 className="font-serif text-2xl text-[#17233F]">
                            1. Information We Collect
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            When you use our website or place an order, we may collect
                            information such as your name, email address, shipping
                            address, billing information, phone number, and order details.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            We may also collect technical information such as your
                            browser type, device information, IP address, and information
                            about how you interact with our website.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="mt-12">
                        <h2 className="font-serif text-2xl text-[#17233F]">
                            2. How We Use Your Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            We may use your information to:
                        </p>

                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
                            <li>Process and deliver your orders.</li>
                            <li>Communicate with you about your purchases.</li>
                            <li>Provide customer support.</li>
                            <li>Improve our website and shopping experience.</li>
                            <li>Send newsletters and promotional communications when you have opted in.</li>
                            <li>Prevent fraud and protect the security of our website.</li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="mt-12">
                        <h2 className="font-serif text-2xl text-[#17233F]">
                            3. Payment Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            Payments are processed through secure payment providers.
                            Zizo Couture does not directly store complete credit or
                            debit card information on its own servers.
                        </p>
                    </div>

                    {/* Section 4 */}
                    <div className="mt-12">
                        <h2 className="font-serif text-2xl text-[#17233F]">
                            4. Cookies
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            Our website may use cookies and similar technologies to
                            remember preferences, understand website usage, and improve
                            your browsing experience.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div className="mt-12">
                        <h2 className="font-serif text-2xl text-[#17233F]">
                            5. Sharing Your Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            We may share necessary information with trusted service
                            providers that help us operate our business, such as
                            payment processors, delivery providers, hosting providers,
                            and customer support services.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            We do not sell your personal information.
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div className="mt-12">
                        <h2 className="font-serif text-2xl text-[#17233F]">
                            6. Data Security
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            We take reasonable measures to protect your personal
                            information against unauthorized access, alteration,
                            disclosure, or destruction.
                        </p>
                    </div>

                    {/* Section 7 */}
                    <div className="mt-12">
                        <h2 className="font-serif text-2xl text-[#17233F]">
                            7. Your Rights
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            Depending on where you live, you may have rights regarding
                            your personal information, including the right to access,
                            correct, delete, or restrict the processing of your data.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            You may also withdraw consent for marketing communications
                            at any time.
                        </p>
                    </div>

                    {/* Section 8 */}
                    <div className="mt-12">
                        <h2 className="font-serif text-2xl text-[#17233F]">
                            8. Changes to This Policy
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            We may update this Privacy Policy from time to time.
                            Any changes will be posted on this page with an updated
                            revision date.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="mt-12 border-t border-[#D9D5CC] pt-10">
                        <h2 className="font-serif text-2xl text-[#17233F]">
                            9. Contact Us
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            If you have questions about this Privacy Policy or how
                            we handle your information, please contact us.
                        </p>

                        <a
                            href="mailto:hello@zizocouture.com"
                            className="mt-5 inline-block text-sm text-[#9A7653] underline underline-offset-4 transition hover:text-[#17233F]"
                        >
                            hello@zizocouture.com
                        </a>
                    </div>

                </div>
            </section>

        </main>
    );
};

export default Privacy;