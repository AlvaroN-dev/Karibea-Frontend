import { User } from "lucide-react"
import Link from "next/link"

const UserIcon = () => {
  return (
    <Link href={'/login'}>
      <div className="flex items-center gap-1 hover:text-lightColor hoverEffect cursor-pointer">
        <User className="w-5 h-5"/>
        <span className="hidden md:inline"></span>
      </div>
    </Link>
  )
}

export default UserIcon
