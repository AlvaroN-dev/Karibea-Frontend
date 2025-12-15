import { getFilteredProducts } from "@/lib/data";
import { Container } from "@/components/ui/Container"; // Asegúrate de que Container tenga export default o export { Container }
import { AddToCartWrapper } from "@/components/features/AddToCardWrapper";
import { Metadata } from "next";

// Definir Props para Next.js 15
interface Props {
    params: Promise<{
        category: string;
    }>
}

// 1. Metadatos
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

    return {
        title: `${categoryName} | Karibea`,
        description: `Encuentra lo mejor en ${categoryName} en Karibea Shop.`
    };
}

// 2. Rutas estáticas
export async function generateStaticParams() {
    return [
        { category: "mujer" },
        { category: "hombre" },
        { category: "ninos" },
        { category: "cosmeticos" },
        { category: "accesorios" },
        { category: "ofertas" },
    ];
}

// 3. EL COMPONENTE DE PÁGINA (¡Aquí debe estar el export default!)
export default async function CategoryPage({ params }: Props) {
    const { category } = await params;

    const categorySlug = decodeURIComponent(category);
    const products = getFilteredProducts(categorySlug);

    const categoryTitles: Record<string, string> = {
        mujer: "Moda Mujer",
        hombre: "Moda Hombre",
        ninos: "Moda Infantil",
        cosmeticos: "Belleza y Cosméticos",
        accesorios: "Accesorios Exclusivos",
        ofertas: "Ofertas Especiales"
    };

    const title = categoryTitles[categorySlug] || categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

    return (
        <Container className="py-10">
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-gray-500">
                    {products.length} {products.length === 1 ? 'producto encontrado' : 'productos encontrados'}
                </p>
            </div>

            {products.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <AddToCartWrapper key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-gray-50 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">No encontramos productos aquí</h2>
                    <p className="text-gray-500">Intenta buscar en otra categoría o regresa al inicio.</p>
                </div>
            )}
        </Container>
    );
}