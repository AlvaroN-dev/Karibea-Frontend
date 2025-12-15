"use client"
import { headerData } from "@/src/constants/navLInks"
import { X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const [showMenu, setShowMenu] = useState(isOpen)
  const [animation, setAnimation] = useState("animate-slide-in-left")
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      setShowMenu(true)
      setAnimation("animate-slide-in-left")
    } else {
      setAnimation("animate-slide-out-left")
      // Esperar a que termine la animación antes de ocultar
      const timeout = setTimeout(() => setShowMenu(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [isOpen])

  if (!showMenu) return null

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-xl ${animation}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <span className="font-semibold text-lg text-darkColor">Menú</span>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-darkColor cursor-pointer" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-5 py-4 gap-4">
          {headerData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`font-semibold text-gray-500 hover:font-extrabold hover:text-black hover:scale-105 transition-transform duration-200 ease-in-out ${
                pathname === link.href ? "text-black font-extrabold" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default SideMenu
