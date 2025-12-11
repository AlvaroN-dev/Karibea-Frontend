"use client"
import { AlignLeft } from "lucide-react"
import { Button } from "../../shadcn/button"
import SideMenu from "./SideMenu"
import { useState } from "react"


const MobileMenu = () => {
    const [isSideBarOpen, setisSideBarOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setisSideBarOpen(!isSideBarOpen)} className="md:hidden">
                <AlignLeft className="hover:text-darkColor hoverEffect  hover:cursor-pointer " />
            </Button>
            <div className="md:hidden">
                <SideMenu 
                isOpen={isSideBarOpen}
                onClose={() => setisSideBarOpen(false)}/>
            </div>
        </>
    )
}

export default MobileMenu