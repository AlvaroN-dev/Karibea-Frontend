import { allProducts } from "@/lib/data";
import { Hero } from "@/components/features/Hero";
import { Newsletter } from "@/components/features/Newsletter";
import { ProductCard } from "@/components/ui/ProductCard";
import { AddToCartWrapper } from "@/components/features/AddToCardWrapper"; // Crearemos este wrapper sencillo abajo
import Link from "next/link";
import { ImageWithFallBack } from "@/components/ui/ImageWithFallBack";

export default function HomePage() {
    // Tomamos los primeros 8 productos para "Destacados"
    const featuredProducts = allProducts.slice(0, 8);

    const categories = [
        { id: 'mujer', name: 'Mujer', img: 'https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac?auto=format&fit=crop&w=800&q=80' },
        { id: 'hombre', name: 'Hombre', img: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=800&q=80' },
        { id: 'ninos', name: 'Niños', img: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80' },
        { id: 'cosmeticos', name: 'Cosméticos', img: 'https://images.unsplash.com/photo-1627921522614-86d4b431bd21?auto=format&fit=crop&w=800&q=80' },
        { id: 'accesorios', name: 'Accesorios', img: 'https://images.unsplash.com/photo-1569388330338-53ecda03dfa1?auto=format&fit=crop&w=800&q=80' },
        { id: 'ofertas', name: 'Ofertas', img: 'https://images.unsplash.com/photo-1599012307530-d163bd04ecab?auto=format&fit=crop&w=800&q=80', isOffer: true },
    ];

    return (
        <div className="bg-white">
            <Hero />

            {/* Productos Destacados */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl mb-4 font-light">Productos Destacados</h2>
                    <p className="text-gray-600">Descubre nuestra selección especial</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                        <AddToCartWrapper key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Promo Banner Intermedio */}
            <section className="relative py-32 bg-fixed bg-center bg-cover my-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80')" }}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">Envío Gratis</h2>
                    <p className="text-xl md:text-2xl mb-8">En todas tus compras superiores a $100</p>
                    <Link
                        href="/ofertas"
                        className="bg-white text-black px-10 py-4 text-lg font-medium hover:bg-gray-100 transition-all inline-block"
                    >
                        Comprar Ahora
                    </Link>
                </div>
            </section>

            {/* Categorías Grid */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl mb-4 font-light">Compra por Categoría</h2>
                        <p className="text-gray-600">Encuentra exactamente lo que buscas</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/${cat.id}`}
                                className="group relative h-64 overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow block"
                            >
                                <ImageWithFallBack
                                    src={cat.img}
                                    alt={cat.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl mb-2 font-medium">{cat.name}</h3>
                                    <p className={`text-sm opacity-90 ${cat.isOffer ? 'text-red-300 font-bold' : ''}`}>
                                        {cat.isOffer ? 'Ver ofertas →' : 'Ver colección →'}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
        </div>
    );
}