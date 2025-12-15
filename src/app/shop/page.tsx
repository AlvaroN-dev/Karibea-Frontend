import { allProducts } from "@/lib/data";
import { CategoryView } from "@/components/views/CategoryView"; // Reutilizamos la vista que ya creamos
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tienda Completa | Karibea",
    description: "Explora todos nuestros productos de moda y estilo.",
};

export default function ShopPage() {
    // Reutilizamos CategoryView pero pasándole "Catálogo Completo" como título
    // y todos los productos
    return (
        <CategoryView
            category="Catálogo Completo"
            initialProducts={allProducts}
        />
    );
}