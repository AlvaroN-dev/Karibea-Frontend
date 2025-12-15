import { allProducts } from "@/lib/data";
import { ProductDetailClient } from "@/components/features/ProductDetailClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Definimos Props para Next.js 15 (params es Promise)
interface Props {
    params: Promise<{ id: string }>
}

// Generar Metadatos dinámicos
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = allProducts.find((p) => p.id.toString() === id);

    return {
        title: product ? `${product.name} | Karibea` : "Producto no encontrado",
        description: product ? `Compra ${product.name} al mejor precio.` : "Producto no disponible",
    };
}

// Generar rutas estáticas para todos los productos (SSG)
export async function generateStaticParams() {
    return allProducts.map((product) => ({
        id: product.id.toString(),
    }));
}

// Componente de Página
export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = allProducts.find((p) => p.id.toString() === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen">
            <ProductDetailClient product={product} />
        </div>
    );
}