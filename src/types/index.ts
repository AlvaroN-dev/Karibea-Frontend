export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    badge?: string;
    size?: string;
    quantity?: number;
}

// Es para extender el tipo Product para el carrito
export interface CartItem extends Product {
    quantity: number;
}