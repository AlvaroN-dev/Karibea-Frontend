import { X } from "lucide-react"
import Logo from "./Logo"
import { Button } from "../../shadcn/button"
import { headerData } from "@/src/constants/navLInks"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SocialMedia from "../shared/SocialMedia"
import { Html } from "next/document"
import { useOutSideClick } from "@/src/hooks"


type SideMenuProp = {
  isOpen: boolean
  onClose: () => void
}
const SideMenu = ({ isOpen, onClose }: SideMenuProp) => {

  const pathName = usePathname()
  const sideBarRef = useOutSideClick<HTMLDivElement>(onClose)

  return (
    <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white /80 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}>
      <div ref={sideBarRef} className="min-w-72 max-w-96 bg-black h-screen  p-10 border-r border-r-lightColor flex flex-col gap-6">
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white " />
          <Button className="hover:text-white hoverEffect hover:cursor-pointer" onClick={onClose}><X /></Button>
        </div>
        <div className="flex flex-col space-y-3.5  tracking-wide">
          {headerData?.map((item) => (
            <Link href={item?.href} key={item?.title} className={`hover:text-white hover:font-bold hoverEffect ${pathName === item?.href && "text-red"}`}>
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia/>
      </div>
    </div>
  )
}

export default SideMenu