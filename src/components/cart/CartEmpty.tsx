"use client";

import { ShoppingCart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // <--- Importar

export function CartEmpty({ onClose }: { onClose: () => void }) {
    const { t } = useLanguage();
    return (
        <div className="flex h-full flex-col items-center justify-center text-center space-y-4">
            <div className="bg-gray-100 p-6 rounded-full">
                <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">{t.cart.empty}</h3>
            <p className="text-gray-500 max-w-xs mx-auto">
                {t.cart.emptyDescription}
            </p>
            <button
                onClick={onClose}
                className="mt-4 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
                {t.cart.continueShopping}
            </button>
        </div>
    );
}