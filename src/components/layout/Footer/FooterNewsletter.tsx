'use client';
import { useLanguage } from "@/context/LanguageContext";

export default function FooterNewsletter() {
    const { t } = useLanguage();
    return (
        <div>
            <h4 className="mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
                {t.features.newsletter}
            </p>
            <div className="flex flex-col gap-2">
                <input
                    type="email"
                    placeholder={t.footer.yourEmail}
                    className="px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    suppressHydrationWarning={true}
                />
                <button className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors">
                    {t.features.subscribe}
                </button>
            </div>
        </div>
    );
}
