"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/context/LanguageContext" // Importar hook

const HeaderMenu = () => {
  const pathName = usePathname();
  const { t } = useLanguage(); // Obtener traducciones

  // Creamos el menú aquí dentro para que se actualice al cambiar idioma
  const menuItems = [
    { title: t.nav.home, href: "/" },
    { title: t.nav.women, href: "/mujer" },
    { title: t.nav.men, href: "/hombre" },
    { title: t.nav.beauty, href: "/cosmeticos" },
    { title: t.nav.offers, href: "/ofertas" },
    { title: t.nav.accessories, href: "/accesorios" },
  ];

  return (
    <div className="hidden md:inline-flex items-center gap-7 text-sm font-semibold text-gray-600 dark:text-gray-300">
      {menuItems.map((item) => (
        <Link
          key={item.href} // Usar href como key es más seguro aquí
          href={item.href}
          className={`hover:text-black dark:hover:text-white transition-colors relative group ${pathName === item.href ? "text-black dark:text-white" : ""}`}
        >
          {item.title}
          <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-black dark:bg-white group-hover:w-1/2 transition-all duration-300 group-hover:left-0 ${pathName === item.href ? "w-1/2 left-0" : ""}`} />
          <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-black dark:bg-white group-hover:w-1/2 transition-all duration-300 group-hover:right-0 ${pathName === item.href ? "w-1/2 right-0" : ""}`} />
        </Link>
      ))}
    </div>
  )
}

export default HeaderMenu