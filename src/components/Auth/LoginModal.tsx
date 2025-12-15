"use client";

import { X, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { useShop } from "@/context/ShopContext";
import { LoginLoader } from "@/components/loaders/LoginLoader"; // Tu loader personalizado

export function LoginModal() {
    const { isLoginOpen, setLoginOpen } = useShop();

    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Nuevo estado de carga

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        confirmPassword: ""
    });

    useEffect(() => {
        if (isLoginOpen) setIsVisible(true);
    }, [isLoginOpen]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => setLoginOpen(false), 300);
    };

    if (!isLoginOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true); // 1. Activar loader

        // 2. Simular petición al servidor (1.5 segundos)
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form submitted:", formData);

        setIsLoading(false); // 3. Desactivar loader
        handleClose();       // 4. Cerrar modal
    };

    return (
        <>
            {/* LOADER OVERLAY: Si está cargando, bloquea todo y muestra el spinner */}
            {isLoading && <LoginLoader />}

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
                <div
                    className={`bg-white w-full max-w-md relative shadow-2xl rounded-xl overflow-hidden transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={handleClose}
                        className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                        disabled={isLoading} // Deshabilitar cierre mientras carga
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-2">LUXE</h2>
                            <p className="text-gray-500">
                                {isLogin ? "Bienvenido de nuevo" : "Crear una cuenta nueva"}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {!isLogin && (
                                <div>
                                    <label className="block text-sm font-medium mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Contraseña</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        disabled={isLoading}
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLogin ? "Iniciar Sesión" : "Registrarse"}
                            </button>
                        </form>

                        <div className="mt-6 text-center text-sm">
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-gray-600 hover:text-black hover:underline font-medium"
                                disabled={isLoading}
                            >
                                {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}