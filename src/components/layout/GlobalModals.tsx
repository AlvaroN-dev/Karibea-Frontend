"use client";

// Asegúrate de que estas rutas sean correctas en tu proyecto
import { Cart } from "@/components/cart/Cart"; // El Cart.tsx "orquestador" que creamos
import { LoginModal } from "@/components/Auth/LoginModal";
import { Favorites } from "@/components/features/Favorites";
import { SearchModal } from "@/components/layout/Footer/SearchModal";
import { useShop } from "@/context/ShopContext";

export function GlobalModals() {
    // Extraemos estados y funciones del context para pasarlos (si los componentes no usan useShop internamente)
    // Pero como refactorizamos tus componentes para usar 'useShop' internamente, 
    // a    quí solo necesitamos renderizarlos. Ellos se auto-gestionan.

    // Nota: El componente Cart que te di anteriormente recibía props (isOpen, items, etc).
    // Para que funcione limpio aquí, debe estar conectado a useShop internamente o debemos pasarle props aquí.

    // OPCIÓN A (Recomendada): Usar el Wrapper aquí para pasar props del context a los componentes.
    // Esto es más seguro si no estás 100% seguro de si tus componentes ya usan useShop adentro.

    const {
        isCartOpen, setCartOpen, cartItems, updateQuantity, removeFromCart,
        // Login se maneja solo (según código anterior)
        // Favorites se maneja solo (según código anterior)
        // SearchModal se maneja solo (según código anterior)
    } = useShop();

    return (
        <>
            {/* El Carrito (Pasamos props porque tu versión original las requería) */}
            <Cart
                isOpen={isCartOpen}
                onClose={() => setCartOpen(false)}
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
            />

            {/* Los demás componentes ya los refactorizamos para usar useShop internamente */}
            <LoginModal />
            <Favorites />
            <SearchModal />
        </>
    );
}