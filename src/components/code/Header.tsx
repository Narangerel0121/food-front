import { InputDemo } from "./Input"

export const Header = () => {
    return (
        <div className="flex justify-between items-center bg-black py-3 px-22">
       <div className="flex gap-1.5">
       <img src="/assets/cap.svg" className="" />
       <div className="">
       <h5 className="font-semibold text-xl text-white"><span>Nom</span><span className="text-red-500">Nom</span></h5>
       <p className="font-normal text-sm text-[#F4F4F5]">Swift delivery</p>
       </div>
       </div>
       <div>
        <InputDemo />
       </div>
    </div>
    )
}