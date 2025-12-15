"use client";

import { ProductCard } from "@/components/ui/ProductCard";
import { useShop } from "@/context/ShopContext";
import { Product } from "@/types";

export function AddToCartWrapper({ product }: { product: Product }) {
    const { addToCart, toggleFavorite, favorites } = useShop();
    const isFavorite = favorites.some(p => p.id === product.id);

    return (
        <ProductCard
            product={product}
            onAddToCart={addToCart}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
        />
    );
}