"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { headerData } from "@/constants/navLInks"; // Asegúrate que coincida con tu archivo
import { usePathname } from "next/navigation";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="md:hidden mr-4">
            <button onClick={() => setIsOpen(true)} className="p-1">
                <Menu className="w-6 h-6" />
            </button>

            {/* Overlay y Menú */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-start">
                    <div className="bg-white w-[80%] max-w-sm h-full p-6 shadow-xl animate-[slideInLeft_0.3s_ease-out]">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold tracking-widest">KARIBEA</h2>
                            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-4">
                            {headerData.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)} // Cerrar al hacer click
                                    className={`text-lg font-medium py-2 border-b border-gray-100 ${pathname === item.href ? "text-black" : "text-gray-500"
                                        }`}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto pt-8 border-t border-gray-100 mt-8">
                            <Link href="/login" className="block py-2 text-gray-600">Mi Cuenta</Link>
                            <Link href="/help" className="block py-2 text-gray-600">Ayuda</Link>
                        </div>
                    </div>

                    {/* Área transparente para cerrar */}
                    <div className="flex-1" onClick={() => setIsOpen(false)} />
                </div>
            )}
            <style jsx global>{`
                @keyframes slideInLeft {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}