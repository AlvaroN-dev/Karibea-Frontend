"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Moon, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export function SettingsToggle() {
    const { theme, setTheme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const [mounted, setMounted] = useState(false);

    // Evitar hidratación incorrecta
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="flex items-center gap-2 border-l border-gray-200 pl-4 ml-4 dark:border-gray-700">
            {/* Dark Mode Toggle */}
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-gray-600 dark:text-gray-300"
                aria-label="Toggle Theme"
            >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Toggle */}
            <button
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-sm font-semibold text-gray-600 dark:text-gray-300"
            >
                <Globe className="w-4 h-4" />
                <span>{language === "es" ? "ES" : "EN"}</span>
            </button>
        </div>
    );
}