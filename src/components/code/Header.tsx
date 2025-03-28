"use client"
import { ShoppingCart, User } from "lucide-react"
import { InputDemo } from "./Input"
import { useState } from "react"
import { TabsDemo } from "./TabsDemo"

export const Header = () => {
    const [isDown, setIsDown] = useState(false)
    const handleCart = () => {
        setIsDown(true)
        console.log("daragdtsan shuu")
    }
    return (
       <div>
         <div className="flex justify-between items-center bg-black py-3 px-22">
            <div className="flex gap-1.5">
                <img src="/assets/cap.svg" className="" />
                <div className="">
                    <h5 className="font-semibold text-xl text-white"><span>Nom</span><span className="text-red-500">Nom</span></h5>
                    <p className="font-normal text-sm text-[#F4F4F5]">Swift delivery</p>
                </div>
            </div>
            <div className="flex gap-3">
                <InputDemo />
                <div className="bg-white rounded-full w-11 h-11 flex items-center justify-center" onClick={handleCart}><ShoppingCart size={16} strokeWidth={1} /></div>
                <div className=" bg-red-600 rounded-full w-11 h-11 flex items-center justify-center"><User size={16} color="#ffffff" strokeWidth={1} /></div>
            </div>
        </div>
        <div className={`flex flex-row-reverse absolute w-full pr-6 ${(isDown) == false ? "hidden" : "block"}`}>
            <TabsDemo />
        </div>
       </div>
    )
}