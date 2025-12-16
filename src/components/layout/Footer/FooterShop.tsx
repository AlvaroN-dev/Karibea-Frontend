'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Ya no necesitamos props ni onClick, usamos navegación real
export default function FooterShop() {
    const { t } = useLanguage();
    const cats = [
        { name: t.footer.women, href: "/mujer" },
        { name: t.footer.men, href: "/hombre" },
        { name: t.footer.kids, href: "/ninos" },
        { name: t.footer.beauty, href: "/cosmeticos" },
        { name: t.footer.accessories, href: "/accesorios" },
        { name: t.footer.offers, href: "/ofertas" },
    ];

    return (
        <div>
            <h4 className="mb-4 font-semibold">Comprar</h4>
            <ul className="space-y-2 text-sm text-gray-400">
                {cats.map(cat => (
                    <li key={cat.name}>
                        <Link
                            href={cat.href}
                            className="hover:text-white transition-colors"
                        >
                            {cat.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}