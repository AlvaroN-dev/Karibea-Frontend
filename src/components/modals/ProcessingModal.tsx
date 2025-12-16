"use client";

import { Loader2, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    isOpen: boolean;
    onComplete: () => void;
}

export function ProcessingModal({ isOpen, onComplete }: Props) {
    const [step, setStep] = useState<"loading" | "success">("loading");

    useEffect(() => {
        if (isOpen) {
            setStep("loading");
            // Paso 1: Simular proceso (2 segundos)
            const timer1 = setTimeout(() => {
                setStep("success");
            }, 2000);

            // Paso 2: Cerrar/Redirigir (1 segundo después del éxito)
            const timer2 = setTimeout(() => {
                onComplete();
            }, 3000);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
            };
        }
    }, [isOpen, onComplete]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center max-w-sm w-full animate-[fadeIn_0.3s_ease-out]">
                {step === "loading" ? (
                    <>
                        <div className="relative mb-4">
                            <div className="w-16 h-16 border-4 border-gray-100 rounded-full"></div>
                            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                            <Loader2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-black" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Procesando</h3>
                        <p className="text-gray-500 text-center text-sm">Preparando tu pedido para el pago seguro...</p>
                    </>
                ) : (
                    <>
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-[scaleIn_0.3s_ease-out]">
                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">¡Todo listo!</h3>
                        <p className="text-gray-500 text-center text-sm">Redirigiendo a la pasarela de pago...</p>
                    </>
                )}
            </div>
            <style jsx>{`
                @keyframes scaleIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
}