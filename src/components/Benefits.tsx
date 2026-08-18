const benefits = [
    {
        title: "Free Shipping",
        description: "Enjoy complimentary shipping on orders over €150.",
        icon: "✦",
    },
    {
        title: "Easy Returns",
        description: "Not quite right? Enjoy our simple return process.",
        icon: "↩",
    },
    {
        title: "Secure Payment",
        description: "Your payment information is protected and secure.",
        icon: "♡",
    },
    {
        title: "Quality First",
        description: "Thoughtfully selected pieces made to last.",
        icon: "◆",
    },
];

const Benefits = () => {
    return (
        <section className="border-y border-[#D9D5CC] bg-[#F8F6F0] px-6 py-14">
            <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#D9D5CC] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">

                {benefits.map((benefit) => (
                    <div
                        key={benefit.title}
                        className="flex flex-col items-center px-6 py-8 text-center lg:py-4"
                    >
                        {/* Icon */}
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#9A7653] text-sm text-[#9A7653]">
                            {benefit.icon}
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-xl text-[#17233F]">
                            {benefit.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 max-w-xs text-xs leading-6 text-gray-500">
                            {benefit.description}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Benefits;