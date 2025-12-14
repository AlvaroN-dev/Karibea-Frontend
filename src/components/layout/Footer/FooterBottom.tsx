'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function FooterBottom() {
    const { t } = useLanguage();
    return (
        <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-400">
                    {t.footer.rightReserved}
                </p>
                <div className="flex gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
                    <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
                    <a href="#" className="hover:text-white transition-colors">{t.footer.cookies}</a>
                </div>
            </div>
        </div>
    );
}
