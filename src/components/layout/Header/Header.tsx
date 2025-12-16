"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { Container } from "@/components/ui/Container"; // Asegúrate de importar { Container } si es exportado así
import { Search, ShoppingCart, User, Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

const Header = () => {
  // CORRECCIÓN: Verifica si en tu Contexto se llama 'cart' o 'cartItems'.
  // Aquí asumo que es 'cartItems' según el estándar, si es 'cart' déjalo como estaba.
  const { cartItems, favorites, setCartOpen, setLoginOpen, setFavoritesOpen } = useShop();

  // Si tu contexto usa 'cart' y sigue fallando, es que falta agregarlo al return del ContextProvider.
  // Pero lo más seguro es que sea cartItems.
  const itemCount = cartItems ? cartItems.length : 0;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300 dark:border-gray-800">
      <Container className="flex items-center justify-between h-20">

        <MobileMenu />
        <Logo className="text-black dark:text-white" />
        <HeaderMenu />

        <div className="flex items-center gap-2 sm:gap-4">

          <div className="hidden sm:flex items-center gap-1 border-r border-gray-200 dark:border-gray-700 pr-3 mr-1">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-black dark:text-white">
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => setLoginOpen(true)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-black dark:text-white"
          >
            <User className="w-5 h-5" />
          </button>

          <button
            onClick={() => setFavoritesOpen(true)}
            className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-black dark:text-white"
          >
            <Heart className="w-5 h-5" />
            {mounted && favorites.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {favorites.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-black dark:text-white"
          >
            <ShoppingCart className="w-5 h-5" />
            {mounted && itemCount > 0 && (
              <span className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {itemCount}
              </span>
            )}
          </button>

        </div>
      </Container>
    </header>
  );
};

export default Header;