"use client"
import { AlignLeft } from "lucide-react"
import { Button } from "../../shadcn/button"
import SideMenu from "./SideMenu"
import { useState } from "react"

const MobileMenu = () => {
  // Estado para abrir/cerrar el SideMenu
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  return (
    <>
      {/* Botón para abrir menú, visible en mobile y tablet */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsSideBarOpen(true)}
        className="lg:hidden text-darkColor hover:bg-gray-100 cursor-pointer transition-all duration-300"
      >
        <AlignLeft className="w-6 h-6" />
      </Button>

      {/* SideMenu con animación */}
      <SideMenu
        isOpen={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
      />
    </>
  )
}

export default MobileMenu
