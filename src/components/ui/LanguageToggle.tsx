"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext" // <--- Importamos el contexto

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage() // <--- Usamos el hook real

    const toggleLang = () => {
        // Cambiar entre 'es' y 'en'
        setLanguage(language === "es" ? "en" : "es")
    }

    return (
        <button
            onClick={toggleLang}
            className="flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-black dark:text-white"
            title="Cambiar idioma"
        >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
        </button>
    )
}