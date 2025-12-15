"use client";

import Link from "next/link";
import { ImageWithFallBack } from "@/components/ui/ImageWithFallBack";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { t } = useLanguage();
    return (
        <section className="relative h-[600px] sm:h-[700px] flex items-center justify-center text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <ImageWithFallBack
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80"
                    alt="Hero Fashion"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 animate-[fadeInUp_1s_ease-out]">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                    {t.features.title} <span className="font-bold">{t.features.subtitle}</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100">
                    {t.features.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/mujer"
                        className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
                    >
                        {t.features.buyWomen}
                    </Link>
                    <Link
                        href="/hombre"
                        className="px-8 py-3 border border-white text-white font-medium hover:bg-white/10 transition-colors"
                    >
                        {t.features.buyMen}
                    </Link>
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}