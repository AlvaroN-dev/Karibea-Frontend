"use client";

import { useState, useEffect } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Product } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";
import { useShop } from "@/context/ShopContext";
import { Container } from "@/components/ui/Container";

interface CategoryViewProps {
    category: string;
    initialProducts: Product[];
}

export function CategoryView({ category, initialProducts }: CategoryViewProps) {
    const { addToCart, toggleFavorite, favorites } = useShop();

    // Estados para filtros y ordenamiento
    const [products, setProducts] = useState(initialProducts);
    const [sortBy, setSortBy] = useState("featured");
    const [showFilters, setShowFilters] = useState(false);

    // Actualizar productos si cambia la categoría
    useEffect(() => {
        setProducts(initialProducts);
    }, [initialProducts]);

    // Lógica de Ordenamiento
    useEffect(() => {
        let sorted = [...products];
        switch (sortBy) {
            case "price-low":
                sorted.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                sorted.sort((a, b) => b.price - a.price);
                break;
            case "newest":
                // Si tuvieras fecha, sería: new Date(b.createdAt) - new Date(a.createdAt)
                // Por ahora simulamos invirtiendo ids
                sorted.sort((a, b) => b.id - a.id);
                break;
            default:
                // "featured" podría ser el orden original
                break;
        }
        setProducts(sorted);
    }, [sortBy]); // Dependencia: solo sortBy para no resetear filtros complejos si los hubiera

    const categoryTitles: Record<string, string> = {
        mujer: "Moda Mujer",
        hombre: "Moda Hombre",
        ninos: "Moda Niños",
        cosmeticos: "Cosméticos",
        accesorios: "Accesorios",
        ofertas: "Ofertas Especiales"
    };

    return (
        <Container className="py-8">
            {/* Header de Categoría */}
            <div className="mb-8 animate-[fadeIn_0.5s_ease-out]">
                <h1 className="text-3xl md:text-4xl mb-2 font-bold capitalize">
                    {categoryTitles[category] || category}
                </h1>
                <p className="text-gray-600">{products.length} productos encontrados</p>
            </div>

            {/* Barra de Herramientas (Filtros y Ordenar) */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors rounded-md"
                >
                    <SlidersHorizontal className="w-4 h-4" />
                    {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
                </button>

                <div className="flex items-center gap-4">
                    <label className="text-sm text-gray-600">Ordenar por:</label>
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none bg-white border border-gray-300 px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                        >
                            <option value="featured">Destacados</option>
                            <option value="price-low">Precio: Menor a Mayor</option>
                            <option value="price-high">Precio: Mayor a Menor</option>
                            <option value="newest">Más Recientes</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-500" />
                    </div>
                </div>
            </div>

            {/* Panel de Filtros (Copiado de tu diseño original) */}
            {showFilters && (
                <div className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-lg animate-[fadeIn_0.3s_ease-out]">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                            <h3 className="font-semibold mb-3">Categoría</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm text-gray-600 hover:text-black cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300" /> Ropa
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-600 hover:text-black cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300" /> Zapatos
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-600 hover:text-black cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300" /> Accesorios
                                </label>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Talla</h3>
                            <div className="space-y-2">
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <label key={size} className="flex items-center gap-2 text-sm text-gray-600 hover:text-black cursor-pointer">
                                        <input type="checkbox" className="rounded border-gray-300" /> {size}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Precio</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm text-gray-600 hover:text-black cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300" /> Menos de $50
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-600 hover:text-black cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300" /> $50 - $100
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-600 hover:text-black cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300" /> Más de $100
                                </label>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Color</h3>
                            <div className="flex flex-wrap gap-2">
                                {["bg-black", "bg-white", "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"].map((color) => (
                                    <button
                                        key={color}
                                        className={`w-8 h-8 rounded-full ${color} border border-gray-300 hover:scale-110 transition-transform shadow-sm`}
                                        title={color.replace('bg-', '')}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Grid de Productos */}
            {products.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-lg">
                    <p className="text-xl text-gray-500">No se encontraron productos en esta categoría.</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="animate-[fadeInUp_0.5s_ease-out]"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <ProductCard
                                product={product}
                                onAddToCart={addToCart}
                                isFavorite={favorites.some(f => f.id === product.id)}
                                onToggleFavorite={toggleFavorite}
                            />
                        </div>
                    ))}
                </div>
            )}

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </Container>
    );
}