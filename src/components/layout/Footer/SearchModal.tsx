"use client";

import { X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { useShop } from "@/context/ShopContext";
import { allProducts } from "@/lib/data";
import { Product } from "@/types";

export function SearchModal() {
    const { isSearchOpen, setSearchOpen, addToCart, toggleFavorite, favorites } = useShop(); // Contexto

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isSearchOpen) setIsVisible(true);
    }, [isSearchOpen]);

    // Lógica de búsqueda
    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredProducts([]);
        } else {
            const query = searchQuery.toLowerCase();
            const filtered = allProducts.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
            setFilteredProducts(filtered);
        }
    }, [searchQuery]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setSearchOpen(false);
            setSearchQuery("");
        }, 300);
    };

    if (!isSearchOpen) return null;

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[80] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
                onClick={handleClose}
            />

            <div
                className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl bg-white z-[90] shadow-2xl transition-all duration-300 max-h-[90vh] overflow-hidden rounded-b-2xl ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-100 p-6 z-10">
                    <div className="flex items-center gap-4">
                        <Search className="w-6 h-6 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar productos (ej. Vestido, Reloj)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 text-xl outline-none placeholder:text-gray-300"
                            autoFocus
                        />
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Results */}
                <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-6 bg-gray-50/50">
                    {searchQuery.trim() === "" ? (
                        <div className="text-center py-20 text-gray-400">
                            <Search className="w-16 h-16 mx-auto mb-4 opacity-10" />
                            <p className="text-lg">Empieza a escribir para descubrir estilos</p>
                        </div>
                    ) : filteredProducts.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-lg">No encontramos "{searchQuery}"</p>
                            <p className="text-sm mt-2 text-gray-400">Intenta con "Mujer", "Reloj" o "Zapatos"</p>
                        </div>
                    ) : (
                        <>
                            <p className="text-sm text-gray-500 mb-6 font-medium uppercase tracking-wider">
                                {filteredProducts.length} resultados encontrados
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {filteredProducts.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className="animate-[fadeInUp_0.4s_ease-out]"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <ProductCard
                                            product={product}
                                            onAddToCart={(p) => {
                                                addToCart(p);
                                                handleClose(); // Opcional: cerrar al agregar
                                            }}
                                            isFavorite={favorites.some(f => f.id === product.id)}
                                            onToggleFavorite={toggleFavorite}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <style jsx global>{`
                @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
}