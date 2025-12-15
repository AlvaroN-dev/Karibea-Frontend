"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { Product } from "@/types";
import { useShop } from "@/context/ShopContext";
import { ImageWithFallBack } from "@/components/ui/ImageWithFallBack";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";

export function ProductDetailClient({ product }: { product: Product }) {
    const { addToCart, toggleFavorite, favorites, setCartOpen } = useShop();
    const [selectedSize, setSelectedSize] = useState("M");
    const [isAdding, setIsAdding] = useState(false);
    const { t } = useLanguage();

    const isFavorite = favorites.some(f => f.id === product.id);
    const sizes = ["XS", "S", "M", "L", "XL"];

    const handleAddToCart = () => {
        setIsAdding(true);
        addToCart(product, 1, selectedSize);
        setTimeout(() => {
            setIsAdding(false);
            setCartOpen(true); // Abrir carrito automáticamente
        }, 500);
    };

    return (
        <Container className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {/* 1. Galería de Imágenes (Simple por ahora) */}
                <div className="space-y-4">
                    <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden shadow-sm relative group">
                        <ImageWithFallBack
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {product.badge && (
                            <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm font-bold tracking-wider">
                                {product.badge}
                            </span>
                        )}
                    </div>
                </div>

                {/* 2. Información del Producto */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-semibold">${product.price}</span>
                        {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                                ${product.originalPrice}
                            </span>
                        )}
                        {product.originalPrice && (
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                            </span>
                        )}
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        {t.features.descriptionProduct}
                    </p>

                    {/* Selector de Tallas */}
                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="font-medium">{t.features.selectSize}</span>
                            <button className="text-sm text-gray-500 underline hover:text-black">{t.features.sizeGuide}</button>
                        </div>
                        <div className="flex gap-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 flex items-center justify-center rounded-md border transition-all ${selectedSize === size
                                        ? "border-black bg-black text-white"
                                        : "border-gray-200 hover:border-black text-gray-700"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Botones de Acción */}
                    <div className="flex gap-4 mb-8">
                        <button
                            onClick={handleAddToCart}
                            disabled={isAdding}
                            className="flex-1 bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isAdding ? (
                                <span className="animate-pulse">{t.features.adding}</span>
                            ) : (
                                <>
                                    <ShoppingCart className="w-5 h-5" />
                                    {t.features.addToCart}
                                </>
                            )}
                        </button>
                        <button
                            onClick={() => toggleFavorite(product)}
                            className={`p-4 rounded-full border transition-colors ${isFavorite
                                ? "bg-red-50 border-red-200 text-red-500"
                                : "border-gray-200 hover:border-gray-300 text-gray-700"
                                }`}
                        >
                            <Heart className={`w-6 h-6 ${isFavorite ? "fill-current" : ""}`} />
                        </button>
                    </div>

                    {/* Beneficios */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-t border-gray-100">
                        <div className="flex flex-col items-center text-center gap-2">
                            <div className="p-3 bg-gray-50 rounded-full">
                                <Truck className="w-5 h-5 text-gray-700" />
                            </div>
                            <span className="text-xs font-medium text-gray-600">{t.features.freeShipping}</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                            <div className="p-3 bg-gray-50 rounded-full">
                                <RefreshCw className="w-5 h-5 text-gray-700" />
                            </div>
                            <span className="text-xs font-medium text-gray-600">{t.features.freeReturn}</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                            <div className="p-3 bg-gray-50 rounded-full">
                                <ShieldCheck className="w-5 h-5 text-gray-700" />
                            </div>
                            <span className="text-xs font-medium text-gray-600">{t.features.securePayment}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}