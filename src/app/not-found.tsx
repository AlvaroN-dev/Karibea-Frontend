import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
    return (
        <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-9xl font-black text-gray-200">404</h1>
            <h2 className="text-3xl font-bold mt-4 mb-2">Página no encontrada</h2>
            <p className="text-gray-500 mb-8 max-w-md">
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>

            <Link
                href="/"
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
                Volver al Inicio
            </Link>
        </Container>
    );
}