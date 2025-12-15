"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/types";
import { ImageWithFallBack } from "@/components/ui/ImageWithFallBack";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
    item: CartItemType;
    onUpdateQuantity: (id: number, qty: number) => void;
    onRemoveItem: (id: number) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemoveItem }: Props) {
    const { t } = useLanguage();
    return (
        <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <ImageWithFallBack
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3 className="line-clamp-2 pr-4">{item.name}</h3>
                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.category} {item.size && `• Talla ${item.size}`}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 hover:bg-gray-100 transition-colors"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-2 font-medium w-8 text-center">{item.quantity}</span>
                        <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="font-medium text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                        <Trash2 className="w-4 h-4" />
                        <span className="text-xs">{t.cart.Eliminar}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}