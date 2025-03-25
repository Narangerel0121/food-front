import { FacebookIcon, Instagram } from "lucide-react"

export const Footer = () => {
    return (
        <div className="bg-black text-white">

            <div className="bg-red-500">
                <p>Fresh fast delivered</p>
            </div>
            <div className="grid grid-cols-5">
                <img src="/assets/cap.svg" />
                <div className="col-span-3 col-start-2 grid grid-cols-3">
                    <div>
                        <h6>NOMNOM</h6>

                    </div>
                    <div>
                        <h6>Menu</h6>
                        <div></div>
                    </div>
                    <div>
                        <h6 className="hidden">Menu</h6>
                        <div></div>
                    </div>
                </div>
                <div>
                    <h6>FOLLOW US</h6>
                    <div className="flex gap-4">
                    <FacebookIcon size={28} color="#ffffff" fill="black" strokeWidth={0.5} className="border rounded-full bg-white" />
                    <Instagram size={28} color="#ffffff" strokeWidth={1.5} />
                    </div>
                </div>
            </div>
        </div>
    )
}
