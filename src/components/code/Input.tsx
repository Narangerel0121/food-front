import { Input } from "@/components/ui/input"
import { ChevronRightIcon, MapPin } from "lucide-react"

export function InputDemo() {
  return (
    <div className="bg-white flex items-center gap-2 border rounded-full px-4">
        <div className="flex items-center gap-1">
        <MapPin size={16} color="#EF4444" strokeWidth={1.5} />
        <div className="text-[#EF4444]">Delivery address:</div>
        </div>
        <div className="flex items-center">
        <Input type="text" placeholder="Add location " className="bg-transparent focus: outline-none border-transparent focus: border:focus-transparent"/>
        <ChevronRightIcon className="text-gray-400" />
        </div>
    </div>
  )
}


