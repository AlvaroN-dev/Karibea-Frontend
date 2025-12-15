"use client";

export function TopBanner() {
    return (
        <div className="bg-black text-white overflow-hidden py-2 relative z-50">
            {/* Contenedor de la animación */}
            <div className="whitespace-nowrap animate-marquee flex items-center">
                {/* Repetimos el texto varias veces para que el bucle sea infinito y fluido */}
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center mx-4">
                        <span className="text-xs font-medium tracking-widest uppercase">
                            ✨ ENVÍOS GRATIS EN COMPRAS MAYORES A $100
                        </span>
                        <span className="mx-4 text-gray-500">•</span>
                        <span className="text-xs font-medium tracking-widest uppercase">
                            DEVOLUCIONES GRATUITAS EN 30 DÍAS
                        </span>
                        <span className="mx-4 text-gray-500">•</span>
                    </div>
                ))}
            </div>

            {/* Definimos la animación aquí mismo para no tocar el tailwind.config */}
            <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}