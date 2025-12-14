// CORRECCIÓN: Importar desde @/lib/utils, no data
import { cn } from "@/lib/utils"
import Link from "next/link"

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={'/'}>
      {/* Ajusté las clases para usar tailwind estándar si 'text-darkColor' no está definido en tu config aún */}
      <h2 className={cn('text-2xl font-black tracking-wider uppercase hover:opacity-80 transition-opacity group font-sans', className)}>
        KARIBEA
      </h2>
    </Link>
  )
}

export default Logo