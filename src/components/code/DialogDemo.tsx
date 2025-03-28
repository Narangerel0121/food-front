import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { DialogFooter, DialogHeader } from "../ui/dialog"
import { Minus, Plus } from "lucide-react"

export function DialogDemo(props) {
    console.log(props, "dialog")
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="mb-6 rounded-full absolute inset-y-40 right-5">
                    <Plus size={16} color="#cf3030" />
                </Button>
            </DialogTrigger>
            <DialogContent className="h-[412px] w-fit">
                <div className="flex gap-4">
                    <img src={`${props.image}`} className="w-1/2 rounded-sm" />
                    <div>
                        <div>
                            <DialogTitle className="font-semibold text-3xl text-red-600">{props.foodName}</DialogTitle>
                            <DialogDescription className="text-base font-normal">
                                {props.ingredients}
                            </DialogDescription>
                        </div>
                        <div>
                            <div className="flex justify-around gap-50">
                                <div>
                                    <div className="text-base font-normal text-left whitespace-nowrap">total price</div>
                                    <p className="font-semibold text-2xl">{props.price}</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Button className="bg-white text-black rounded-full w-11 h-11"><Minus /></Button>
                                    <h3>1</h3>
                                    <Button className="bg-white text-black rounded-full w-11 h-11"><Plus /></Button>
                                </div>
                            </div>
                            <Button type="submit">Add to chart</Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
