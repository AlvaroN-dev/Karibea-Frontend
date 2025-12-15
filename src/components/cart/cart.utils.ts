import { CartItem } from "./cart.types";

export function calculateTotals(items: CartItem[]) {
    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = subtotal > 50 ? 0 : 5;
    const total = subtotal + shipping;

    return { subtotal, shipping, total };
}
