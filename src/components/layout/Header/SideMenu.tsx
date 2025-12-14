"use client"
import { headerData } from "@/src/constants/navLInks"
import { X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  if (!isOpen) return null
  const pathname = usePathname()
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[85%] max-w-sm
          bg-white z-50 shadow-xl
          ${isOpen ? "animate-slide-in-left" : "animate-slide-out-left"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <span className="font-semibold text-lg text-darkColor">
            Menú
          </span>
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
              className={`font-semibold text-gray-500 hover:font-extrabold hover:text-black hover:scale-105 transition-transform duration-200 ease-in-out ${pathname === link.href ? 'text-gray-900 font-extrabold ' : ''}`}
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
