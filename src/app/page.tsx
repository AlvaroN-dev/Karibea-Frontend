import { Hero } from "@/src/components/features/Hero"

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Banner principal */}
      <Hero />

      {/* Aqui luego agregamos:
          - Categorias
          - Productos destacados
          - Ofertas
      */}
    </main>
  )
}
