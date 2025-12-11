'use client';

interface Props {
    onCategoryClick?: (category: string) => void;
}

export default function FooterShop({ onCategoryClick }: Props) {
    const cats = ["mujer", "hombre", "niños", "cosmeticos", "accesorios", "ofertas"];

    return (
        <div>
            <h4 className="mb-4">Comprar</h4>
            <ul className="space-y-2 text-sm text-gray-400">
                {cats.map(cat => (
                    <li key={cat}>
                        <button
                            onClick={() => onCategoryClick?.(cat)}
                            className="hover:text-white transition-colors text-left"
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
