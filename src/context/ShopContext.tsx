"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/types"; // Asegúrate de tener este archivo types/index.ts creado

interface ShopContextType {
    // Datos
    cartItems: CartItem[];
    favorites: Product[];

    // Estados de Modales
    isCartOpen: boolean;
    isLoginOpen: boolean;
    isSearchOpen: boolean;
    isFavoritesOpen: boolean;

    // Acciones de Modales
    setCartOpen: (open: boolean) => void;
    setLoginOpen: (open: boolean) => void;
    setSearchOpen: (open: boolean) => void;
    setFavoritesOpen: (open: boolean) => void;

    // Acciones de Datos
    addToCart: (product: Product, quantity?: number, size?: string) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    toggleFavorite: (product: Product) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
    // --- Estados de Datos ---
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [favorites, setFavorites] = useState<Product[]>([]);

    // --- Estados de Modales ---
    const [isCartOpen, setCartOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isFavoritesOpen, setFavoritesOpen] = useState(false);

    // --- Persistencia (LocalStorage) ---
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        const savedFavorites = localStorage.getItem('favorites');

        if (savedCart) {
            try { setCartItems(JSON.parse(savedCart)); } catch (e) { console.error("Error parsing cart", e); }
        }
        if (savedFavorites) {
            try { setFavorites(JSON.parse(savedFavorites)); } catch (e) { console.error("Error parsing favorites", e); }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    // --- Lógica del Carrito ---
    const addToCart = (product: Product, quantity = 1, size = 'M') => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id && item.size === size);
            if (existing) {
                return prev.map(item => item.id === product.id && item.size === size
                    ? { ...item, quantity: item.quantity + quantity } : item);
            }
            return [...prev, { ...product, quantity, size }];
        });
        setCartOpen(true); // Abrir carrito al agregar
    };

    const removeFromCart = (id: number) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    };

    // --- Lógica de Favoritos ---
    const toggleFavorite = (product: Product) => {
        setFavorites(prev => {
            const exists = prev.find(p => p.id === product.id);
            if (exists) {
                return prev.filter(p => p.id !== product.id);
            }
            return [...prev, product];
        });
    };

    return (
        <ShopContext.Provider value={{
            cartItems, favorites,
            isCartOpen, isLoginOpen, isSearchOpen, isFavoritesOpen,
            addToCart, removeFromCart, updateQuantity, toggleFavorite,
            setCartOpen, setLoginOpen, setSearchOpen, setFavoritesOpen
        }}>
            {children}
        </ShopContext.Provider>
    );
}

export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) throw new Error("useShop must be used within a ShopProvider");
    return context;
};