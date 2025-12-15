"use client";

import { ShoppingBag } from "lucide-react";
import { CartItem } from "@/types";
import { useState } from "react";
// Importamos tu modal de carga
import { ProcessingModal } from "@/components/modals/ProcessingModal";
// Importamos el hook de idioma
import { useLanguage } from "@/context/LanguageContext";

interface Props {
    items: CartItem[];
    onClose: () => void;
}

export function CartFooter({ items, onClose }: Props) {
    // 1. Obtenemos el diccionario 't' (que cambia entre español/ingles automáticamente)
    const { t } = useLanguage();

    const [isProcessing, setIsProcessing] = useState(false);

    const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleCheckout = () => {
        setIsProcessing(true);
    };

    const handleProcessComplete = () => {
        setIsProcessing(false);
        onClose();
        // Aquí iría tu router.push('/checkout') real
        console.log(t.cart.checkout);
    };

    return (
        <>
            <div className="border-t border-gray-200 p-6 bg-gray-50 dark:bg-neutral-900 dark:border-neutral-800 transition-colors">

                {/* Subtotal */}
                <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white mb-4">
                    <p>{t.cart.subtotal}</p> {/* <--- Texto traducido */}
                    <p>${subtotal.toFixed(2)}</p>
                </div>

                {/* Nota legal (Si quieres traducirla, agrégala a tu dictionary.ts primero) */}
                <p className="mt-0.5 text-sm text-gray-500 mb-6 dark:text-gray-400">
                    {t.cart.taxes}
                </p>

                {/* Botón de Acción */}
                <button
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
                    onClick={handleCheckout}
                >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    {t.cart.checkout} {/* <--- Texto traducido ("Finalizar Compra" / "Checkout") */}
                </button>
            </div>

            {/* Modal de Carga (mantiene tu lógica anterior) */}
            <ProcessingModal
                isOpen={isProcessing}
                onComplete={handleProcessComplete}
            />
        </>
    );
}