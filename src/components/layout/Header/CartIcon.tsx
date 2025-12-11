import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const CartIcon = () => {
  return (
    <Link href={'/cart'}>
      <ShoppingCart className="w-5 h-5 hover:text-lightColor hoverEffect"/>
    </Link>
  )
}

export default CartIcon