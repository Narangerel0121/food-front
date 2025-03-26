import { Copyright, FacebookIcon, Instagram } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

export const Footer = () => {
    return (
        <div className="mt-100 bg-black text-white pt-15 overflow-hidden">

            <div className="flex justify-around gap-6 bg-red-500 gap-8">
                <h5 className="font-semibold text-3xl py-7">Fresh fast delivered</h5>
                <h5 className="font-semibold text-3xl py-7">Fresh fast delivered</h5>
                <h5 className="font-semibold text-3xl py-7">Fresh fast delivered</h5>
                <h5 className="font-semibold text-3xl py-7">Fresh fast delivered</h5>
            </div>
            <div className="grid grid-cols-5 mx-22 my-20 relative">
                <div className="flex flex-col items-center absolute inset-y-0 left-0">
                    <img src="/assets/cap.svg" className="mb-1" />
                    <h5 className="font-semibold text-xl"><span>Nom</span><span className="text-red-500">Nom</span></h5>
                    <p className="font-normal text-sm text-[#F4F4F5]">Swift delivery</p>
                </div>
                <div className="col-span-3 col-start-2 grid grid-cols-3 mx-30">
                    <div>
                        <h6 className="text-[#71717A] font-normal text-base ml-4">NOMNOM</h6>
                        <div className="mt-4">
                        <div><Button variant="link" className="text-white-500 text-base">Home</Button></div>
                        <div><Button variant="link" className="text-white-500 text-base">Contact us</Button></div>
                        <div><Button variant="link" className="text-white-500 text-base">Delivery zone</Button></div>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-[#71717A] font-normal text-base  ml-4">MENU</h6>
                        <div className="mt-4">
                            <div><Button variant="link" className="text-white-500 text-base">Appetizers</Button></div>
                            <div><Button variant="link" className="text-white-500 text-base">Salads</Button></div>
                            <div><Button variant="link" className="text-white-500 text-base">Pizzas</Button></div>
                            <div><Button variant="link" className="text-white-500 text-base">Lunchfavorites</Button></div>
                            <div><Button variant="link" className="text-white-500 text-base">Main dishes</Button></div>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-black font-normal text-base ml-4">Menu</h6>
                        <div className="mt-4">
                            <div><Button variant="link" className="text-white text-base">Side dish</Button></div>
                            <div><Button variant="link" className="text-white text-base">Brunch</Button></div>
                            <div><Button variant="link" className="text-white text-base">Deserts</Button></div>
                            <div><Button variant="link" className="text-white text-base">Beverages</Button></div>
                            <div><Button variant="link" className="text-white text-base">Fish & sea foods</Button></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h6 className="text-[#71717A] font-normal text-base">FOLLOW US</h6>
                    <div className="flex gap-4 mt-4">
                        <FacebookIcon size={28} color="#ffffff" fill="black" strokeWidth={0.5} className="border rounded-full bg-white" />
                        <Instagram size={28} color="#ffffff" strokeWidth={1.5} />
                    </div>
                </div>
            </div>
            <Separator orientation="horizontal" className="mt-22 bg-gray-400" />
            <div className="pb-10 flex justify-start gap-12 px-22 my-8">
                <p className="text-gray-500 font-normal text-sm flex items-center">Copy right 2024 <span className="text-black">a</span><Copyright size={16} color="#9e9e9e" strokeWidth={0.5} /><span className="text-black">a</span>Nomnom LLC</p>
                <p className="text-gray-500 font-normal text-sm">Privacy policy</p>
                <p className="text-gray-500 font-normal text-sm">Terms and condition</p>
                <p className="text-gray-500 font-normal text-sm">Cookie policy</p>
            </div>
        </div>
    )
}
