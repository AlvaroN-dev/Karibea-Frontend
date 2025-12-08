import { Heart } from "lucide-react"
import Link from "next/link"



const FavoriteButton = () => {
  return (
    <div>
      <Link href={'/cart'}>
        <Heart className="w-5 h-5 hover:text-lightColor hoverEffect" />
      </Link>
    </div>
  )
}

export default FavoriteButton