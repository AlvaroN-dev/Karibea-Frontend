"use client";
import { ShoppingCart } from "lucide-react";
import { useShop } from "@/context/ShopContext"; // Importamos el contexto

const CartIcon = () => {
  const { setCartOpen, cartItems } = useShop(); // Conectamos

  // Calculamos cantidad total
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button
      onClick={() => setCartOpen(true)}
      className="relative hover:text-darkColor transition-colors"
    >
      <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
};
export default CartIcon;