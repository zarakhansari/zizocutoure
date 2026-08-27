export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    sizes: string[];
};

export const products: Product[] = [
    {
        id: 1,
        name: "Embroidered Denim Jacket",
        price: 129,
        image: "/images/jacket.jpeg",
        category: "Jackets",
        description:
            "A statement denim jacket featuring beautiful embroidered details. Designed to add personality to your everyday wardrobe.",
        sizes: ["XS", "S", "M", "L", "XL"],
    },

    {
        id: 2,
        name: "Floral Embroidered Skirt",
        price: 89,
        image: "/images/skirt.jpeg",
        category: "Skirts",
        description:
            "A feminine skirt with delicate floral embroidery and an effortless silhouette.",
        sizes: ["XS", "S", "M", "L", "XL"],
    },

    {
        id: 3,
        name: "Wide Leg Trousers",
        price: 95,
        image: "/images/trousers.jpeg",
        category: "Trousers",
        description:
            "Comfortable wide-leg trousers designed for an elegant and relaxed look.",
        sizes: ["XS", "S", "M", "L", "XL"],
    },

    {
        id: 4,
        name: "Embroidered T-Shirt",
        price: 59,
        image: "/images/Tshirt.jpeg",
        category: "T-Shirts",
        description:
            "A classic everyday T-shirt with playful embroidered details.",
        sizes: ["XS", "S", "M", "L", "XL"],
    },

    {
        id: 5,
        name: "Denim Cap",
        price: 39,
        image: "/images/Cap.jpeg",
        category: "Accessories",
        description:
            "A casual denim cap featuring the signature Zizo style.",
        sizes: ["One Size"],
    },
];