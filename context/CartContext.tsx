"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem } from '@/data/products';

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, 
        quantity: number,
        selectedColor?: string,
        selectedSize?: string,
        selectedDesign?: string
    ) => void;
    removeFromCart: (productId: number, size?: string, design?: string) => void;
    clearCart: () => void;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product, quantity: number, selectedColor?: string, selectedSize?: string, selectedDesign?: string) => {
        setCart((prev) => {
            // Check if THIS specific variation is already in the cart
            const existing = prev.find(
                (item) =>
                    item.id === product.id &&
                    item.selectedSize === selectedSize &&
                    item.selectedDesign === selectedDesign &&
                    item.selectedColor === selectedColor
            );

            if (existing) {
                return prev.map((item) =>
                    item === existing ? { ...item, quantity: item.quantity + quantity } : item
                );
            }

            // Add as a new item with selections
            return [...prev, { ...product, quantity, selectedSize, selectedDesign, selectedColor }];
        });
    };

    const clearCart = () => setCart([]);

    const removeFromCart = (productId: number, size?: string, design?: string) => {
        setCart((prev) => {
            // Find the exact item matches
            const existing = prev.find(
                (item) =>
                    item.id === productId &&
                    item.selectedSize === size &&
                    item.selectedDesign === design
            );

            if (!existing) return prev;

            if (existing.quantity > 1) {
                // If more than 1, just subtract
                return prev.map((item) =>
                    item === existing ? { ...item, quantity: item.quantity - 1 } : item
                );
            }

            // If only 1 left, remove the row entirely
            return prev.filter((item) => item !== existing);
        });
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
}