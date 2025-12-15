"use client"

import { useLanguage } from "@/context/LanguageContext";

export function Newsletter() {
    const { t } = useLanguage();
    return (
        <section className="py-16 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl mb-4">{t.features.newsletter}</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    {t.features.subscription}
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="flex-1 px-6 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
                        required
                        suppressHydrationWarning={true}
                    />
                    <button type="submit" className="bg-white text-black px-8 py-3 hover:bg-gray-200 transition-colors whitespace-nowrap font-medium">
                        {t.features.subscribe}
                    </button>
                </form>
            </div>
        </section>
    );
}