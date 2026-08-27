import { createContext, useContext, useState, type ReactNode } from "react";

export type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    size: string;
    quantity: number;
};

type CartContextType = {
    cartItems: CartItem[];
    clearCart: () => void;
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number, size: string) => void;
    updateQuantity: (
        id: number,
        size: string,
        quantity: number
    ) => void;
    cartCount: number;
    cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(
    undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const clearCart = () => {
        setCartItems([]);
    };

    const addToCart = (item: CartItem) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (cartItem) =>
                    cartItem.id === item.id &&
                    cartItem.size === item.size
            );

            if (existingItem) {
                return currentItems.map((cartItem) =>
                    cartItem.id === item.id &&
                        cartItem.size === item.size
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + item.quantity,
                        }
                        : cartItem
                );
            }

            return [...currentItems, item];
        });
    };

    const removeFromCart = (id: number, size: string) => {
        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => !(item.id === id && item.size === size)
            )
        );
    };

    const updateQuantity = (
        id: number,
        size: string,
        quantity: number
    ) => {
        if (quantity < 1) return;

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id && item.size === size
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                cartCount,
                cartTotal,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
};