"use client"

import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { CartProps } from "./cart.types";
import { CartItem } from "./CartItem";
import { CartFooter } from "./CartFooter";
import { CartEmpty } from "./CartEmpty";
import { CartSkeleton } from "@/components/loaders/CartSkeleton"; // Tu componente Skeleton

export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoadingData, setIsLoadingData] = useState(false); // Estado para controlar el skeleton

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);

            // SIMULACIÓN: Mostrar skeleton por 1 segundo al abrir (opcional)
            // Esto es útil si trajeras el carrito de una API real
            setIsLoadingData(true);
            const timer = setTimeout(() => setIsLoadingData(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
                onClick={handleClose}
            />

            {/* Cart panel */}
            <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${isVisible ? "translate-x-0" : "translate-x-full"}`}>

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold">Carrito de Compras</h2>
                    <button
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* CONTENIDO DEL CARRITO */}
                <div className="flex-1 overflow-y-auto p-6">
                    {/* Caso 1: Cargando datos -> Mostrar Skeleton */}
                    {isLoadingData ? (
                        <CartSkeleton />
                    ) : items.length === 0 ? (
                        /* Caso 2: Carrito vacío -> Mostrar Empty State */
                        <CartEmpty onClose={handleClose} />
                    ) : (
                        /* Caso 3: Datos listos -> Mostrar Items */
                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <div
                                    key={`${item.id}-${item.size}`}
                                    className="animate-[slideInRight_0.4s_ease-out]"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <CartItem
                                        item={item}
                                        onUpdateQuantity={onUpdateQuantity}
                                        onRemoveItem={onRemoveItem}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer (Solo si hay items y no está cargando) */}
                {!isLoadingData && items.length > 0 && (
                    <CartFooter items={items} onClose={handleClose} />
                )}
            </div>

            <style jsx global>{`
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `}</style>
        </>
    );
}