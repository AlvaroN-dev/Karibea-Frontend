"use client"
import { X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShow(true)
    } else {
      const timeout = setTimeout(() => setShow(false), 300) // duración animación
      return () => clearTimeout(timeout)
    }
  }, [isOpen])

  if (!show) return null

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
        className={`
          fixed top-0 left-0 h-full w-[85%] max-w-sm
          bg-white z-50 shadow-xl
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <span className="font-semibold text-lg text-darkColor">
            Menú
          </span>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500 cursor-pointer hover:text-black hover:font-extrabold" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-5 py-4 gap-4">
          {[
            { href: "/ofertas", label: "Ofertas" },
            { href: "/mujer", label: "Mujer" },
            { href: "/hombre", label: "Hombre" },
            { href: "/ninos", label: "Niños" },
            { href: "/accesorios", label: "Accesorios" },
            { href: "/cosmeticos", label: "Cosméticos" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-semibold text-gray-500 hover:font-extrabold hover:text-black hover:scale-105 transition-transform duration-200 ease"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default SideMenu
