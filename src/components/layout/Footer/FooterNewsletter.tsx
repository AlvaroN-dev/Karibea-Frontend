'use client';

export default function FooterNewsletter() {
    return (
        <div>
            <h4 className="mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
                Suscríbete para recibir ofertas exclusivas y novedades.
            </p>
            <div className="flex flex-col gap-2">
                <input
                    type="email"
                    placeholder="Tu email"
                    className="px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors">
                    Suscribirse
                </button>
            </div>
        </div>
    );
}
