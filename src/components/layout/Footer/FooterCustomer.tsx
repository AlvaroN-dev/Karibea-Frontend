'use client';

export default function FooterCustomer() {
    const items = [
        "Contacto",
        "Envíos y Entregas",
        "Devoluciones",
        "Guía de Tallas",
        "Preguntas Frecuentes",
        "Rastrear Pedido"
    ];

    return (
        <div>
            <h4 className="mb-4">Servicio al Cliente</h4>
            <ul className="space-y-2 text-sm text-gray-400">
                {items.map(item => (
                    <li key={item}>
                        <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
