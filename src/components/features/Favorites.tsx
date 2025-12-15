"use client";

import { X, ShoppingCart, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useShop } from "@/context/ShopContext";
import { ImageWithFallBack } from "@/components/ui/ImageWithFallBack";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Favorites() {
    const {
        isFavoritesOpen,
        setFavoritesOpen,
        favorites,
        toggleFavorite,
        addToCart
    } = useShop();

    const [isVisible, setIsVisible] = useState(false);

    // Animación de entrada/salida
    useEffect(() => {
        if (isFavoritesOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isFavoritesOpen]);

    const handleClose = () => {
        setFavoritesOpen(false);
    };

    // Función para mover de favoritos al carrito
    const handleMoveToCart = (product: any) => {
        addToCart(product);
        toggleFavorite(product); // Opcional: ¿Lo quitamos de favoritos al agregar al carrito? Tú decides.
    };

    const { t } = useLanguage();

    if (!isVisible && !isFavoritesOpen) return null;

    return (
        <>
            {/* Overlay Oscuro */}
            <div
                className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${isFavoritesOpen ? "opacity-100" : "opacity-0"}`}
                onClick={handleClose}
            />

            {/* Panel Lateral */}
            <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${isFavoritesOpen ? "translate-x-0" : "translate-x-full"}`}>

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold tracking-tight">{t.features.myFavorites} ({favorites.length})</h2>
                    <button
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Lista de Favoritos */}
                <div className="flex-1 overflow-y-auto p-6">
                    {favorites.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-2">
                                <Trash2 className="w-8 h-8 text-gray-300" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">{t.features.emptyList}</h3>
                            <p className="text-gray-500 max-w-xs">
                                {t.features.description}
                            </p>
                            <button
                                onClick={handleClose}
                                className="mt-4 text-black border-b border-black font-medium hover:text-gray-600 hover:border-gray-600 transition-colors"
                            >
                                {t.cart.continueShopping}
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {favorites.map((product) => (
                                <div key={product.id} className="flex gap-4 group animate-[fadeIn_0.3s_ease-out]">
                                    {/* Imagen */}
                                    <div className="relative w-24 h-32 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                                        <ImageWithFallBack
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <button
                                            onClick={() => toggleFavorite(product)}
                                            className="absolute top-1 right-1 p-1.5 bg-white/80 rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                                            title="Eliminar de favoritos"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-col flex-1 justify-between py-1">
                                        <div>
                                            <Link href={`/shop/${product.id}`} onClick={handleClose}>
                                                <h3 className="font-medium text-gray-900 line-clamp-2 hover:underline">
                                                    {product.name}
                                                </h3>
                                            </Link>
                                            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                                        </div>

                                        <div className="flex items-center justify-between mt-2">
                                            <span className="font-semibold">${product.price}</span>

                                            <button
                                                onClick={() => handleMoveToCart(product)}
                                                className="flex items-center gap-1.5 text-xs font-medium bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                                            >
                                                <ShoppingCart className="w-3 h-3" />
                                                {t.features.moveToCart}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}