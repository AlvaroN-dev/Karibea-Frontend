"use client";

import Link from "next/link";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { Product } from "@/types";
import { ImageWithFallBack } from "@/components/ui/ImageWithFallBack";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
    isFavorite?: boolean;
    onToggleFavorite?: (product: Product) => void;
    className?: string;
}

export function ProductCard({ product, onAddToCart, isFavorite, onToggleFavorite, className }: ProductCardProps) {

    // IMPORTANTE: El enlace debe apuntar a /shop/${product.id}
    const productLink = `/shop/${product.id}`;

    return (
        <div className={cn("group relative", className)}>
            {/* Imagen y Acciones Overlay */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-3">
                <Link href={productLink}>
                    <ImageWithFallBack
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>

                {/* Badges */}
                {product.badge && (
                    <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                        {product.badge}
                    </span>
                )}
                {product.originalPrice && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">
                        Oferta
                    </span>
                )}

                {/* Botones Flotantes (Solo visibles en hover desktop, o siempre en móvil) */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 px-4">
                    {onAddToCart && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                onAddToCart(product);
                            }}
                            className="flex-1 bg-white text-black py-2.5 px-4 rounded-md font-medium text-sm hover:bg-black hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            <span>Agregar</span>
                        </button>
                    )}

                    {onToggleFavorite && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                onToggleFavorite(product);
                            }}
                            className="bg-white p-2.5 rounded-md hover:bg-red-50 hover:text-red-500 transition-colors shadow-lg"
                        >
                            <Heart className={cn("w-5 h-5", isFavorite && "fill-red-500 text-red-500")} />
                        </button>
                    )}
                </div>
            </div>

            {/* Info Producto */}
            <div className="space-y-1">
                <Link href={productLink}>
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                </Link>
                <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900">${product.price}</p>
                    {product.originalPrice && (
                        <p className="text-xs text-gray-500 line-through">${product.originalPrice}</p>
                    )}
                </div>
            </div>
        </div>
    );
}