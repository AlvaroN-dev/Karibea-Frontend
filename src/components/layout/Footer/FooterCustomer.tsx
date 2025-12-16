'use client';
import { useLanguage } from "@/context/LanguageContext";

export default function FooterCustomer() {
    const { t } = useLanguage();
    const items = [
        t.footer.contact,           // Contact
        t.footer.shipping,          // Shipping & Delivery
        t.footer.returns,           // Free Returns
        t.footer.sizeGuide,         // Size Guide
        t.footer.faq,
        t.footer.trackOrder,

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
