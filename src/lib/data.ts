import { Product } from "@/types";

export const allProducts: Product[] = [
    // ... PEGA AQUÍ TODO EL ARRAY allProducts QUE TENÍAS EN APP.TSX ...
    {
        id: 1,
        name: "Vestido Elegante Negro",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac?auto=format&fit=crop&w=800&q=80",
        category: "Mujer",
        badge: "NUEVO"
    },
    {
        id: 2,
        name: "Chaqueta de Cuero Premium",
        price: 199.99,
        originalPrice: 299.99,
        image: "https://images.unsplash.com/photo-1515614557830-ae0df9016e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGphY2tldHxlbnwxfHx8fDE3NjQ0OTY3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Mujer"
    },
    {
        id: 3,
        name: "Jeans Skinny Azul",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGplYW5zfGVufDF8fHx8MTc2NDUzNjM5OXww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Mujer"
    },
    {
        id: 4,
        name: "Bolso de Mano Elegante",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJhZ3xlbnwxfHx8fDE3NjQ1MzY0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Mujer",
        badge: "NUEVO"
    },

    // Hombre
    {
        id: 5,
        name: "Traje Formal Premium",
        price: 299.99,
        originalPrice: 449.99,
        image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzdWl0fGVufDF8fHx8MTc2NDUzNjI3NXww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Hombre"
    },
    {
        id: 6,
        name: "Camisa Casual Moderna",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzaGlydHxlbnwxfHx8fDE3NjQ1MzY0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Hombre",
        badge: "NUEVO"
    },
    {
        id: 7,
        name: "Chaqueta Deportiva",
        price: 129.99,
        originalPrice: 189.99,
        image: "https://images.unsplash.com/photo-1549237511-bbe6a0979d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBqYWNrZXR8ZW58MXx8fHwxNzY0NTM2NDAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Hombre"
    },
    {
        id: 8,
        name: "Zapatillas Premium",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1656944227480-98180d2a5155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc2NDUzNDg0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Hombre"
    },

    // Niños
    {
        id: 9,
        name: "Conjunto Infantil Colorido",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ1MzYyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Niños",
        badge: "NUEVO"
    },
    {
        id: 10,
        name: "Ropa Deportiva para Niños",
        price: 34.99,
        originalPrice: 49.99,
        image: "https://images.unsplash.com/photo-1622218286192-95f6a20083c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzY0NDkyNTY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Niños"
    },

    // Cosméticos
    {
        id: 11,
        name: "Set de Maquillaje Premium",
        price: 79.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1627921522614-86d4b431bd21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBtYWtldXB8ZW58MXx8fHwxNzY0NDczNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Cosméticos",
        badge: "OFERTA"
    },
    {
        id: 12,
        name: "Labiales Mate Colección",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXBzdGljayUyMGNvc21ldGljc3xlbnwxfHx8fDE3NjQ0Njk2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Cosméticos",
        badge: "NUEVO"
    },
    {
        id: 13,
        name: "Perfume de Lujo",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2NDQ3MzYyOXww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Cosméticos"
    },

    // Accesorios
    {
        id: 14,
        name: "Gafas de Sol Polarizadas",
        price: 129.99,
        originalPrice: 179.99,
        image: "https://images.unsplash.com/photo-1663585703603-9be01a72a62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ1MzkyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Accesorios",
        badge: "NUEVO"
    },
    {
        id: 15,
        name: "Reloj de Lujo",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1702865053958-71ec751c4118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeXxlbnwxfHx8fDE3NjQ1NTc3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Accesorios"
    },
    {
        id: 16,
        name: "Cinturón de Cuero Premium",
        price: 69.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1732257119896-5c16140c4c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWx0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ1MTUyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Accesorios"
    },
    {
        id: 17,
        name: "Set de Accesorios Fashion",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY0NTE3NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Accesorios",
        badge: "NUEVO"
    }
];

export const getFilteredProducts = (category: string): Product[] => {
    if (category === 'home' || !category) return allProducts;
    if (category === 'ofertas') return allProducts.filter(p => p.originalPrice);
    return allProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
};