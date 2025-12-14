"use client"
import { headerData } from "@/src/constants/navLInks"
import Link from "next/link"
import { usePathname } from "next/navigation"

const HeaderMenu = () => {
  const pathName = usePathname();
  return (
    // Links grandes solo visibles en desktop (lg en adelante)
    <div className="hidden lg:flex lg:items-center lg:justify-center w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-darkColor hoverEffect relative group ${pathName === item?.href ? "text-darkColor font-extrabold" : ""}`}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor group-hover:w-1/2 hoverEffect group-hover:left-0 ${pathName === item?.href ? "w-1/2" : ""}`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor group-hover:w-1/2 hoverEffect group-hover:right-0 ${pathName === item?.href ? "w-1/2" : ""}`}
          />
        </Link>
      ))}
    </div>
  )
}

export default HeaderMenu
