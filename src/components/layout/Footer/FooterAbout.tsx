'use client';

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function FooterAbout() {
    return (
        <div>
            <h3 className="text-lg mb-4">LUXE</h3>
            <p className="text-gray-400 text-sm mb-4">
                Tu destino para moda de alta calidad y cosméticos premium.
            </p>
            <div className="flex gap-3">
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded">
                    <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded">
                    <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded">
                    <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded">
                    <Youtube className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}
