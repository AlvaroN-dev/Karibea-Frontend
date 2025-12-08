import { cn } from "@/lib/utils"
import Link from "next/link"

const Logo = ({className} : {className? :string}) => {
  return (
    <Link href={'/'}>
      <h2 className={cn('text-2xl text-darkColor font-black tracking-wider uppercase hover:text-lightColor hoverEffect group font-sans',className)}>

        KARIBE<span className="text-darkColor group-hover:text-lightColor hoverEffect">A</span>
      </h2>
    </Link>
  )
}

export default Logo